import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
  InternalServerErrorException,
} from '@nestjs/common';
import { DataSource, Repository } from 'typeorm';
import { RegCredentialsDto } from './dto/authCredentials.dto';
import { User } from '../entities/user.entity';
import * as bcrypt from 'bcrypt';
import e from 'express';
import { UserResponse } from 'src/models/response/UserResponse';

@Injectable()
export class UsersRepository extends Repository<User> {
  constructor(private dataSource: DataSource) {
    super(User, dataSource.createEntityManager());
  }

  async createUser(
    authCredentialsDto: RegCredentialsDto,
    req: e.Request,
  ): Promise<UserResponse> {
    const { email, username, password } = authCredentialsDto;

    const emailTaken = await this.findOne({
      where: { email },
    });

    if (emailTaken?.id) {
      throw new HttpException(
        {
          errors: [
            {
              field: 'email',
              message: 'Email must be unique.',
            },
          ],
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = this.create({ email, username, password: hashedPassword });
    await this.save(user);

    req!.session!['userId'] = user.id;
    return user.toJSON();
  }
}
