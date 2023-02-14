import styled, { keyframes } from 'styled-components';

const scalefade = keyframes`
	0%{
		transform: translateY(-50px) scale(.9);
		opacity: 0;
	}
	100%{
		transform: translateY(0) scale(1);
		opacity: 1;
	}
`;

export const FormWrapper = styled.div`
	display: flex;
	flex-direction: column;
	background-color: #36393f;
	height: ${(props) => props.h};
	width: ${(props) => props.w};
	padding: 1.2rem 1.7rem 1.2rem 1.7rem;
	border-radius: 0.5rem;
	animation: ${scalefade} 0.2s;
	@media all and (max-width: 480px) {
		width: 100vh;
		height: 100vh;
		padding-top: 4rem;
		border-radius: 0;
		align-items: center;
	}
`;

export const Form = styled.form`
	display: flex;
	flex-direction: column;
	align-items: center;
	width: ${(props) => (props.w ? props.w : '450px')};
`;
