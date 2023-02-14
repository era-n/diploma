import { api } from '../apiClient';

export const register = (body) => api.post('/register', body);

export const login = (body) => api.post('/login', body);

export const logout = () => null;

export const forgotPassword = (email) =>
	api.post('/forgot-password', { email });

export const changePassword = () => null;

export const resetPassword = (body) => api.post('/reset-password', body);
