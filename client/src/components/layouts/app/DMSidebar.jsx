import { Box, Flex, GridItem, Text, UnorderedList } from '@chakra-ui/react';
import { DMPlaceholder } from '../../sections/DMPlaceholder';
import { FriendListButton } from '../../sections/FriendListButton';
import { AccountBar } from '../AccountBar';

export const DMSidebar = () => {
	let bgc = '#2F3136';
	return (
		<GridItem
			display="flex"
			flexDir="column"
			gridColumn={'2'}
			gridRow={'1 / 4'}
			bg="#2F3136"
			overflow="hidden"
			boxSizing="border-box">
			<Flex
				shrink="0"
				boxShadow="0 0.03rem 0.22rem hsla(0, 0%, 0%, 0.53)"
				zIndex="100"
				h="3.3rem"
				align="center">
				<Text
					ml="4"
					textTransform="uppercase"
					fontSize=".89rem"
					fontWeight="semibold"
					color="#a2a5aa"
					userSelect="none">
					DIRECT MESSAGES
				</Text>
			</Flex>
			<Flex
				p=".6rem"
				direction="column"
				flex="1 1 auto"
				boxSizing="border-box"
				overflow="hidden scroll"
				_hover={{
					scrollbarColor:
						'hsl(216, calc(1 * 7.2%), 13.5%) transparent',

					'&::-webkit-scrollbar-thumb': {
						background: '#242629',
					},
				}}
				css={{
					'&::-webkit-scrollbar': {
						width: '7px',
					},
					'&::-webkit-scrollbar-track': {
						width: '7px',
						background: 'inherit',
					},
					'&::-webkit-scrollbar-thumb': {
						background: 'transparent',
						borderRadius: '12px',
					},

					scrollbarColor: 'transparent transparent',
					scrollbarWidth: 'thin',
				}}>
				<FriendListButton />
				<UnorderedList
					listStyleType="none"
					ml="0"
					mt="4">
					{'no data' && (
						<Box>
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
							<DMPlaceholder />
						</Box>
					)}
				</UnorderedList>
			</Flex>
			<AccountBar />
		</GridItem>
	);
};
