import { Grid } from '@chakra-ui/react';

export const AppLayout = ({ children }) => {
	return (
		<Grid
			h="100%"
			bg="#36393f"
			templateColumns="75px 240px 1fr"
			templateRows="auto 1fr
			auto">
			{children}
		</Grid>
	);
};
