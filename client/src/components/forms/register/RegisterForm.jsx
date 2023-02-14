import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { EmailField } from './EmailField';
import { UsernameField } from './UsernameField';
import { PasswordField } from './PasswordField';
import { Button, StyledLink } from '../../../utils/styles';
import { register } from '../../../api/handler/auth';
import { RegSchema } from '../../../utils/validation/user.schema';
import toErrorMap from '../../../utils/toErrorMap';
import { Form, FormWrapper } from '..';
import userStore from '../../../stores/userStore';

export const RegisterForm = () => {
	const navigate = useNavigate();
	const setUser = userStore((state) => state.setUser);
	async function handleRegister(values, { setErrors }) {
		try {
			const { data } = await register(values);
			if (data) {
				setUser(data);
				navigate('/channels/me');
			}
		} catch (e) {
			setErrors(toErrorMap(e));
		}
	}
	const formik = useFormik({
		initialValues: {
			username: '',
			email: '',
			password: '',
		},
		validationSchema: RegSchema,
		onSubmit: handleRegister,
	});
	return (
		<FormWrapper h="31rem">
			<div
				style={{
					display: 'inline-block',
					textAlign: 'center',
					margin: '1rem 0 1.7rem 0',
				}}>
				<p style={{ fontSize: '1.4rem', margin: '0' }}>
					Create Your account
				</p>
			</div>

			<Form onSubmit={formik.handleSubmit}>
				<EmailField
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && formik.errors.email}
					value={formik.values.email}
				/>
				<UsernameField
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.username && formik.errors.username}
					value={formik.values.username}
				/>
				<PasswordField
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.password && formik.errors.password}
					value={formik.values.password}
				/>
				<Button
					m="1.2rem 0 0 0"
					disabled={formik.isSubmitting}
					type="submit">
					Register
				</Button>
				<StyledLink
					to="/login"
					m="0.5rem 0 0 0"
					href="#"
					color="#0A98D1">
					Already have an account?
				</StyledLink>
			</Form>
		</FormWrapper>
	);
};
