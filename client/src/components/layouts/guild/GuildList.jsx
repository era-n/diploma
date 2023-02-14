import { GridItem } from '@chakra-ui/react';
import { Separator } from '../../../utils/styles/index';
import { AddGuildIcon } from '../../sections/AddGuildIcon';
import { HomeIcon } from '../../sections/HomeIcon';

export const GuildList = () => {
	return (
		<GridItem
			display="flex"
			flexDirection="column"
			alignItems="center"
			bg="#242629"
			gridColumn="1"
			gridRow="1/4"
			overflowY="auto"
			css={{
				'&::-webkit-scrollbar': {
					width: '0',
				},
				scrollbarWidth: 'none',
			}}>
			<HomeIcon />
			<Separator
				w="2.3rem"
				h=".17rem"
				bg="#363a3f"
				m=".6rem 0 .6rem 0"
			/>
			<AddGuildIcon />
		</GridItem>
	);
};
