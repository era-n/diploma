import { useFormik } from 'formik';
import { resetPassword } from '../../../api/handler/auth';
import { ResetPasswordSchema } from '../../../utils/validation/user.schema';
import { Button, StyledLink } from '../../../utils/styles';
import { Form, FormWrapper } from '..';
import { useNavigate, useParams } from 'react-router-dom';
import { PasswordField } from '../register/PasswordField';
import userStore from '../../../stores/userStore';
import styled from 'styled-components';
import { useState } from 'react';
import toErrorMap from '../../../utils/toErrorMap';

const TokenError = styled.span`
	display: inline-block;
	vertical-align: baseline;
	margin: 0.6rem 0 0 0;
	color: #d45252;
	font-size: inherit;
	font-weight: inherit;

	&:hover {
		color: #aa3b3b;
	}

	@media all and (max-width: 480px) {
		margin: 0;
	}
`;

export const ResetPasswordForm = () => {
	const navigate = useNavigate();
	const { token } = useParams();
	const setUser = userStore((state) => state.setUser);
	const [tokenError, setTokenError] = useState();

	async function handleSubmit(values, { setErrors }) {
		try {
			const { data } = await resetPassword({ ...values, token });
			if (data) {
				setUser(data);
				navigate('/channels/me');
			}
		} catch (e) {
			const errors = toErrorMap(e);
			if ('token' in errors) {
				setTokenError(errors.token);
			}
			setErrors(errors);
		}
	}
	const formik = useFormik({
		initialValues: {
			newPassword: '',
			confirmNewPassword: '',
		},
		validationSchema: ResetPasswordSchema,
		onSubmit: handleSubmit,
	});
	return (
		<FormWrapper h="24rem">
			<div
				style={{
					display: 'inline-block',
					textAlign: 'center',
					margin: '.8rem 0 1.5rem 0',
				}}>
				<p style={{ fontSize: '1.4rem', margin: '0' }}>
					Reset Password
				</p>
			</div>

			<Form
				w="460px"
				onSubmit={formik.handleSubmit}>
				<PasswordField
					text="New Password"
					name="newPassword"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.touched.newPassword && formik.errors.newPassword
					}
					value={formik.values.newPassword}
				/>
				<PasswordField
					text="Confirm New Password"
					name="confirmNewPassword"
					onChange={formik.handleChange}
					onBlur={formik.handleBlur}
					error={
						formik.touched.confirmNewPassword &&
						formik.errors.confirmNewPassword
					}
					value={formik.values.confirmNewPassword}
				/>

				<Button
					m="1rem 0 0 0"
					disabled={formik.isSubmitting}
					type="submit">
					Reset password
				</Button>
				{tokenError ? (
					<StyledLink to="/forgot-password">
						<TokenError>
							Token expired. Click here to get new token
						</TokenError>
					</StyledLink>
				) : null}
			</Form>
		</FormWrapper>
	);
};
