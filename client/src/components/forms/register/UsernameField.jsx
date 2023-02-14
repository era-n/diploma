import {
	InputContainer,
	Label,
	InputField,
	StyledErrrorMessage,
} from '../../../utils/styles';

export const UsernameField = ({ onChange, onBlur, error, value }) => {
	return (
		<InputContainer m="0 0 .8rem 0">
			<Label htmlFor="username">
				Username
				{error ? (
					<StyledErrrorMessage>{error}</StyledErrrorMessage>
				) : null}
			</Label>
			<InputField
				id="username"
				name="username"
				type="text"
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
		</InputContainer>
	);
};
