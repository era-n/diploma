import {
	InputContainer,
	Label,
	InputField,
	StyledErrrorMessage,
} from '../../../utils/styles';

export const EmailField = ({ onChange, onBlur, error, value }) => {
	return (
		<InputContainer m="0 0 .8rem 0">
			<Label htmlFor="email">
				Email
				{error ? (
					<StyledErrrorMessage>{error}</StyledErrrorMessage>
				) : null}
			</Label>
			<InputField
				id="email"
				name="email"
				type="email"
				onChange={onChange}
				onBlur={onBlur}
				value={value}
			/>
		</InputContainer>
	);
};
