import { useState } from 'react';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';
import {
	InputContainer,
	Label,
	InputField,
	StyledErrrorMessage,
} from '../../../utils/styles';

export const PasswordField = ({ onChange, onBlur, error, value, ...props }) => {
	const [type, setType] = useState('password');

	function show() {
		if (type === 'password') {
			setType('text');
		}
		if (type === 'text') {
			setType('password');
		}
	}
	return (
		<InputContainer
			m="0 0 .8rem 0"
			position="relative">
			<Label htmlFor="password">
				{props.text ? props.text : 'Password'}
				{error ? (
					<StyledErrrorMessage>{error}</StyledErrrorMessage>
				) : null}
			</Label>
			<div style={{ position: 'relative' }}>
				<InputField
					p="40px"
					id="password"
					name={props.name ? props.name : 'password'}
					type={type}
					onChange={onChange}
					onBlur={onBlur}
					value={value}
				/>
				{type === 'password' ? (
					<div
						style={{
							display: 'inline',
							position: 'absolute',
							right: '0',
							top: '0',
							width: '40px',
							height: '100%',
							cursor: 'pointer',
							textAlign: 'center',
						}}>
						<AiFillEye
							onClick={show}
							style={{ width: '23px', height: '100%' }}
						/>
					</div>
				) : (
					<div
						style={{
							display: 'inline',
							position: 'absolute',
							right: '0',
							top: '0',
							width: '40px',
							height: '100%',
							cursor: 'pointer',
							textAlign: 'center',
						}}>
						<AiFillEyeInvisible
							onClick={show}
							style={{ width: '23px', height: '100%' }}
						/>
					</div>
				)}
			</div>
		</InputContainer>
	);
};
