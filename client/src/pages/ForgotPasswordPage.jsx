import { ForgotPasswordForm } from '../components/forms/resetPassword/ForgotPasswordForm';
import { Page } from '../utils/styles';

export const ForgotPasswordPage = () => {
	return (
		<Page
			display="flex"
			justifyContent="center"
			alignItems="center">
			<ForgotPasswordForm />
		</Page>
	);
};
