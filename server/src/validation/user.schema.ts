import * as yup from 'yup';

export const RegSchema = yup.object({
  username: yup
    .string()
    .required()
    .min(3, 'Username must be at least 3 characters')
    .max(30, 'Username must be at most 30 characters')
    .defined(),
  email: yup.string().required().email('Invalid email').defined(),
  password: yup
    .string()
    .min(8, 'Password must be at least 8 characters long')
    .max(128, 'Password must be at most 128 characters')
    .required()
    .defined(),
});

export const LogInSchema = yup.object({
  email: yup.string().required().email('Invalid email').defined(),
  password: yup.string().required().defined(),
});

export const ResetPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .min(6, 'Password must be at least 8 characters long')
    .max(150)
    .required('New Password is required')
    .defined(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), undefined], 'Passwords do not match')
    .required('Confirm New Password is required')
    .defined(),
});

export const ChangePasswordSchema = yup.object({
  currentPassword: yup.string().required('Old Password is required').defined(),
  newPassword: yup
    .string()
    .min(6, 'Password must be at least 8 characters long')
    .max(150)
    .required('New Password is required')
    .defined(),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref('newPassword'), undefined], 'Passwords do not match')
    .required('Confirm New Password is required')
    .defined(),
});

export const ForgotPasswordSchema = yup.object({
  email: yup
    .string()
    .email()
    .lowercase()
    .required('Email is required')
    .defined(),
});
