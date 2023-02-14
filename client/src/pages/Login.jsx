import { LoginForm } from '../components/forms/login/LoginForm';
import { Page } from '../utils/styles';

export const Login = () => {
	return (
		<Page
			display="flex"
			justifyContent="center"
			alignItems="center">
			<LoginForm />
		</Page>
	);
};
