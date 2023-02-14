import { ResetPasswordForm } from '../components/forms/resetPassword/ResetPasswordForm';
import { Page } from '../utils/styles';

export const ResetPasswordPage = () => {
	return (
		<Page
			display="flex"
			justifyContent="center"
			alignItems="center">
			<ResetPasswordForm />
		</Page>
	);
};
