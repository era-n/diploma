import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppPage } from './pages/AppPage';
import { AuthRoute } from './pages/AuthRoute';
import { ForgotPasswordPage } from './pages/ForgotPasswordPage';
import { Login } from './pages/Login';
import { Register } from './pages/register';
import { ResetPasswordPage } from './pages/ResetPasswordPage';
// import { LogInPage } from './pages/Login';
// import { RegisterPage } from './pages/Register';

function App() {
	return (
		<Router>
			<Routes>
				<Route element={<AuthRoute />}>
					<Route
						path="/channels/me"
						element={<AppPage />}
					/>
				</Route>
				<Route
					path="/login"
					element={<Login />}
				/>
				<Route
					path="/register"
					element={<Register />}
				/>
				<Route
					path="/forgot-password"
					element={<ForgotPasswordPage />}
				/>
				<Route
					path="/reset-password/:token"
					element={<ResetPasswordPage />}
				/>
			</Routes>
		</Router>
	);
}

export default App;
