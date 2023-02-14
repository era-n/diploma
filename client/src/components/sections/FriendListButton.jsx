import { color, Flex, Text } from '@chakra-ui/react';
import { HiUsers } from 'react-icons/hi';

export const FriendListButton = () => {
	return (
		<Flex
			rounded=".3rem"
			bg="#42464d"
			shrink="0"
			h="2.9rem"
			align="center"
			pl="1rem"
			gap="1rem"
			color="#d8d8d8"
			cursor="pointer"
			_hover={{
				background: '#3b3e45',
				color: '#bebebe',
			}}
			userSelect="none">
			<HiUsers
				size="1.5rem"
				color="inherit"
			/>
			<Text
				fontSize="1.05rem"
				color="inherit">
				Friends
			</Text>
		</Flex>
	);
};
