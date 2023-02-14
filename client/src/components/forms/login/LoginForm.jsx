import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { EmailField } from '../register/EmailField';
import { PasswordField } from '../register/PasswordField';
import { Button, StyledLink } from '../../../utils/styles';
import { LogInSchema } from '../../../utils/validation/user.schema';
import { login } from '../../../api/handler/auth';
import toErrorMap from '../../../utils/toErrorMap';
import { Form, FormWrapper } from '..';
import userStore from '../../../stores/userStore';

export const LoginForm = () => {
	const navigate = useNavigate();
	const setUser = userStore((state) => state.setUser);
	async function handleLogin(values, { setErrors }) {
		try {
			const { data } = await login(values);
			if (data) {
				setUser(data);
				navigate('/channels/me');
			}
		} catch (e) {
			if (e?.response?.status === 401) {
				setErrors({ password: 'Invalid Credentials' });
			} else if (e?.response?.status === 404) {
				setErrors({ email: 'No user found' });
			} else {
				setErrors(toErrorMap(e));
			}
		}
	}
	const formik = useFormik({
		initialValues: {
			email: '',
			password: '',
		},
		validationSchema: LogInSchema,
		onSubmit: handleLogin,
	});
	return (
		<FormWrapper h="24.8rem">
			<div
				style={{
					display: 'inline-block',
					textAlign: 'center',
					margin: '.6rem 0 .8rem 0',
				}}>
				<p style={{ fontSize: '1.4rem', margin: '0' }}>Welcome</p>
			</div>
			<Form onSubmit={formik.handleSubmit}>
				<EmailField
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && formik.errors.email}
					value={formik.values.email}
				/>
				<PasswordField
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && formik.errors.password}
					value={formik.values.password}
				/>
				<StyledLink
					to="/forgot-password"
					style={{ alignSelf: 'flex-start' }}
					color="#0A98D1"
					m=".1rem 0 0 0">
					Forgot password?
				</StyledLink>
				<Button
					disabled={formik.isSubmitting}
					type="submit"
					m="1rem 0 0 0">
					Log in
				</Button>
				<StyledLink
					to="/register"
					style={{ alignSelf: 'flex-start' }}
					color="#0A98D1"
					m=".3rem 0 0 0">
					Don't have an account?
				</StyledLink>
			</Form>
		</FormWrapper>
	);
};
