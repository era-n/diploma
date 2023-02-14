export class ResetPasswordDto {
  token!: string;

  newPassword!: string;

  confirmNewPassword!: string;
}

export class ForgotPasswordDto {
  email!: string;
}
