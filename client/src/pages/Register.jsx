import { RegisterForm } from '../components/forms/register/RegisterForm';
import { Page } from '../utils/styles';

export const Register = () => {
	return (
		<Page
			display="flex"
			justifyContent="center"
			alignItems="center">
			<RegisterForm />
		</Page>
	);
};
