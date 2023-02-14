import { object, string, ref } from 'yup';

export const RegSchema = object({
	username: string()
		.required('*')
		.min(3, 'Username must be at least 3 characters')
		.max(30, 'Username must be at most 30 characters')
		.defined(),
	email: string().required('*').email('Invalid email').defined(),
	password: string()
		.min(8, 'Password must be at least 8 characters long')
		.max(128, 'Password must be at most 128 characters')
		.required('*')
		.defined(),
});

export const LogInSchema = object({
	email: string().required('*').email('Invalid email').defined(),
	password: string().required().defined(),
});

export const ForgotPasswordSchema = object({
	email: string().email().lowercase().required('Email is required').defined(),
});

export const ResetPasswordSchema = object({
	newPassword: string()
		.min(8, 'Password must be at least 8 characters long')
		.max(150)
		.required('*')
		.defined(),
	confirmNewPassword: string()
		.oneOf([ref('newPassword'), undefined], 'Passwords do not match')
		.required('*')
		.defined(),
});
