import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const slide = keyframes`
	0% {
		opacity: 0;
	}
	100% {
		opacity: 1;
	}

`;

export const Page = styled.div`
	width: 100%;
	height: 100%;
	display: ${(props) => props.display};
	justify-content: ${(props) => props.justifyContent};
	align-items: ${(props) => props.alignItems};
`;

export const InputContainer = styled.div`
	position: ${(props) => props.position};
	background-color: inherit;
	width: 100%;
	margin: ${(props) => props.m};
	/* @media all and (max-width: 480px) {
		width: 80vw;
	} */
`;

export const Label = styled.label`
	vertical-align: baseline;
	font-size: 0.86rem;
	font-weight: 600;
	margin-bottom: 0.66rem;
	color: #a3b2b5;
	text-transform: uppercase;
	letter-spacing: 0.04rem;
`;

export const InputField = styled.input`
	width: 100%;
	font-family: inherit;
	font-size: 1rem;
	padding: 0.9rem ${(props) => (props.p ? props.p : '0.8rem')} 0.9rem 0.7rem;
	box-sizing: border-box;
	outline: none;
	border: none;
	color: #bbbbbb;
	background-color: #202225;
	transition: border 0.2s;
`;

export const Button = styled.button`
	font-family: inherit;
	font-size: 1rem;
	font-weight: 500;
	width: 100%;
	padding: 0.8rem;
	text-align: center;
	line-height: 1;
	border: none;
	border-radius: 0.2rem;
	cursor: pointer;
	margin: ${(props) => props.m};

	background-color: #4f5ce0;
	color: #d8d8d8;
	transition: background-color 0.2s;

	&:hover {
		background-color: #4752c4;
	}

	&:active {
		background-color: #3c45a5;
	}

	&:disabled {
		background-color: #3c45a5;
	}

	/* @media all and (max-width: 480px) {
		width: 50vw;
	} */
`;

export const StyledLink = styled(Link)`
	font-size: 0.93rem;
	cursor: pointer;
	color: ${(props) => props.color};
	margin: ${(props) => props.m};
`;

export const Separator = styled.div`
	width: ${(props) => props.w};
	height: ${(props) => props.h};
	margin: ${(props) => props.m};
	background-color: ${(props) => props.bg};
`;

export const StyledErrrorMessage = styled.span`
	display: inline-block !important;
	vertical-align: baseline;
	margin: 0 0 0 5px;
	color: rgb(201, 70, 70) !important;
	font-size: inherit !important;
	font-weight: inherit !important;
	animation: ${slide} 0.1s;

	@media all and (max-width: 480px) {
		margin: 0;
	}
`;

export const GuildPill = styled.span`
	opacity: 0;
	width: 0;
	height: 0;
	position: absolute;
	background: #fff;
	border-radius: 50%;
	left: 0;
	transition: all 150ms;
`;

// <Box
//       w={"8px"}
//       h={"40px"}
//       bg={"white"}
//       position={"absolute"}
//       borderRadius={"0 4px 4px 0"}
//       ml={"-4px"}
//       left={0}
//       mt={"4px"}
//     />
