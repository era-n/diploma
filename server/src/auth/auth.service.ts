import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import e from 'express';
import * as bcrypt from 'bcrypt';
import { v4 } from 'uuid';
import {
  RegCredentialsDto,
  LogInCredentialsDto,
} from './dto/authCredentials.dto';
import { UsersRepository } from './auth.repository';
import { redis } from 'src/config/redis';
import { FORGET_PASSWORD_PREFIX } from 'src/utils/constants';
import { sendEmail } from 'src/utils/sendMail';
import { UserResponse } from 'src/models/response/UserResponse';
import { ResetPasswordDto } from './dto/resetPassword.dto';

@Injectable()
export class AuthService {
  constructor(private userRepository: UsersRepository) {}

  async register(
    authCredentialsDto: RegCredentialsDto,
    req: e.Request,
  ): Promise<UserResponse> {
    return await this.userRepository.createUser(authCredentialsDto, req);
  }

  async login(
    authCredentialsDto: LogInCredentialsDto,
    req: e.Request,
  ): Promise<UserResponse> {
    const { password, email } = authCredentialsDto;
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      throw new NotFoundException();
    }

    const valid = await bcrypt.compare(password, user.password);

    if (!valid) {
      throw new UnauthorizedException();
    }

    req!.session['userId'] = user.id;

    return user.toJSON();
  }

  async forgotPassword(email: string): Promise<boolean> {
    const user = await this.userRepository.findOne({ where: { email } });

    if (!user) {
      return true;
    }

    const token = v4();

    await redis.set(
      FORGET_PASSWORD_PREFIX + token,
      user.id,
      'EX',
      1000 * 60 * 60 * 24 * 3,
    );

    sendEmail(
      email,
      `<p>Hello,<br> Click on the link below to reset your password.
      <a href='http://localhost:5173/reset-password/${token}'>Reset Password</a>`,
    );

    return true;
  }

  async resetPassword(
    resetPasswordDto: ResetPasswordDto,
    req: e.Request,
  ): Promise<UserResponse> {
    const { newPassword, token } = resetPasswordDto;

    const key = FORGET_PASSWORD_PREFIX + token;
    const userId = await redis.get(key);
    if (!userId) {
      throw new HttpException(
        {
          errors: [
            {
              field: 'token',
              message: 'Token expired',
            },
          ],
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const user = await this.userRepository.findOne({
      where: { id: userId },
    });

    if (!user) throw new NotFoundException();

    user.password = await bcrypt.hash(newPassword, 10);

    await this.userRepository.save(user);

    await redis.del(key);

    req!.session['userId'] = userId;

    return user.toJSON();
  }
}
