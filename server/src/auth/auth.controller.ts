import { Body, Controller, Post, Req } from '@nestjs/common';
import {
  RegCredentialsDto,
  LogInCredentialsDto,
} from './dto/authCredentials.dto';
import { AuthService } from './auth.service';
import {
  ForgotPasswordSchema,
  LogInSchema,
  RegSchema,
  ResetPasswordSchema,
} from '../validation/user.schema';
import { YupValidationPipe } from '../validation/yupValidationPipe';
import e from 'express';
import { ForgotPasswordDto, ResetPasswordDto } from './dto/resetPassword.dto';
import { UserResponse } from 'src/models/response/UserResponse';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  signUp(
    @Body(new YupValidationPipe(RegSchema))
    authCredentialsDto: RegCredentialsDto,
    @Req() req: e.Request,
  ): Promise<UserResponse> {
    return this.authService.register(authCredentialsDto, req);
  }

  @Post('/login')
  signIn(
    @Body(new YupValidationPipe(LogInSchema))
    authCredentialsDto: LogInCredentialsDto,
    @Req() req: e.Request,
  ): Promise<UserResponse> {
    return this.authService.login(authCredentialsDto, req);
  }

  @Post('/forgot-password')
  forgotPassword(
    @Body(new YupValidationPipe(ForgotPasswordSchema))
    { email }: ForgotPasswordDto,
  ) {
    return this.authService.forgotPassword(email);
  }

  @Post('/reset-password')
  resetPassword(
    @Body(new YupValidationPipe(ResetPasswordSchema))
    resetPasswordDto: ResetPasswordDto,
    @Req() req: e.Request,
  ): Promise<UserResponse> {
    return this.authService.resetPassword(resetPasswordDto, req);
  }
}
