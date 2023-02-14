import { useFormik } from 'formik';
import { forgotPassword } from '../../../api/handler/auth';
import { ForgotPasswordSchema } from '../../../utils/validation/user.schema';
import { Button } from '../../../utils/styles';
import { EmailField } from '../register/EmailField';
import { Form, FormWrapper } from '..';
import toErrorMap from '../../../utils/toErrorMap';

export const ForgotPasswordForm = () => {
	async function handleSubmit(values, { setErrors }) {
		try {
			await forgotPassword(values.email);
		} catch (e) {
			setErrors(toErrorMap(e));
		}
	}
	const formik = useFormik({
		initialValues: {
			email: '',
		},
		validationSchema: ForgotPasswordSchema,
		onSubmit: handleSubmit,
	});
	return (
		<FormWrapper h="19rem">
			<div
				style={{
					display: 'inline-block',
					textAlign: 'center',
					margin: '1rem 0 1.7rem 0',
				}}>
				<p style={{ fontSize: '1.4rem', margin: '0' }}>
					Forgot Password
				</p>
			</div>

			<Form onSubmit={formik.handleSubmit}>
				<EmailField
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={formik.touched.email && formik.errors.email}
					value={formik.values.email}
				/>
				<Button
					m="1.2rem 0 0 0"
					disabled={formik.isSubmitting}
					type="submit">
					Send Mail
				</Button>
			</Form>
		</FormWrapper>
	);
};
