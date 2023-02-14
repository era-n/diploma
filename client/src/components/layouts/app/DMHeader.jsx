import { Box, Flex, GridItem, Text, Divider, color } from '@chakra-ui/react';
import { HiUsers } from 'react-icons/hi';

export const DMHeader = () => {
	return (
		<GridItem
			display="flex"
			alignItems="center"
			h="3.3rem"
			boxShadow="-0.1rem 0.03rem 0.22rem hsla(0, 0%, 0%, 0.53), 1rem 0 0.8px hsla(0, 0%, 0%, 0.3)"
			gridColumn="3"
			gridRow="1"
			bg="#36393F">
			<Flex
				flex="1 1 auto"
				h="24px"
				align="center">
				<Flex
					h="100%"
					cursor="default"
					ml="1rem"
					gap="0.7rem">
					<HiUsers
						size="22px"
						color="#A2A5AA"
					/>
					<Text
						h="100%"
						color="#fff"
						fontSize="1.1rem">
						Friends
					</Text>
				</Flex>
				<Divider
					ml="0.9rem"
					borderColor="#52565e"
					orientation="vertical"
				/>
				<Flex
					h="100%"
					ml="0.9rem"
					align="center"
					gap="1rem">
					<Box
						display="inline-block"
						verticalAlign="baseline"
						w="fit-content"
						p="0 0.5rem 0 0.5rem"
						borderRadius="0.3rem"
						color="#bbb"
						fontSize="1.04rem"
						cursor="pointer"
						_hover={{
							background: '#454950',
							color: '#ebebeb',
						}}
						_active={{
							background: '#3f434b',
							color: '#fff',
						}}>
						Online
					</Box>
					<Box
						w="fit-content"
						p="0 0.7rem 0 0.7rem"
						borderRadius="0.3rem"
						fontSize="1.04rem"
						color="#bbb"
						cursor="pointer"
						_hover={{
							background: '#454950',
							color: '#ebebeb',
						}}
						_active={{
							background: '#3f434b',
							color: '#fff',
						}}>
						All
					</Box>
					<Box
						w="fit-content"
						p="0 0.5rem 0 0.5rem"
						borderRadius="0.3rem"
						fontSize="1.04rem"
						color="#bbb"
						cursor="pointer"
						_hover={{
							background: '#454950',
							color: '#ebebeb',
						}}
						_active={{
							background: '#3f434b',
							color: '#fff',
						}}>
						Pending
					</Box>
				</Flex>
			</Flex>
		</GridItem>
	);
};
