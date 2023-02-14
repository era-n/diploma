import { Flex } from '@chakra-ui/react';
import { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { GuildPill } from '../../utils/styles';

export const HomeIcon = () => {
	let borderRadius = '50%';
	const [isActive, setActive] = useState(false);
	return (
		<Flex
			m=".6rem 0 0 0"
			width="100%"
			position="relative"
			justify="center"
			align="center">
			<Flex
				direction="column"
				align="center"
				justify="center"
				bg="#36393f"
				borderRadius={isActive ? '35%' : borderRadius}
				minH="48px"
				minW="48px"
				color="#c4c4c4"
				_hover={{
					cursor: 'pointer',
					borderRadius: '35%',
				}}
				transition={borderRadius}
				transitionDuration="150ms"
				css={{
					'&:hover ~ span': {
						opacity: '1',
						borderRadius: '0 4px 4px 0',
						width: '4px',
						height: '22px',
					},
				}}
				onClick={() => setActive(true)}>
				<AiFillHome
					size="28px"
					color="inherit"
					cursor="pointer"
				/>
			</Flex>
			<GuildPill
				style={
					isActive
						? {
								opacity: '1',
								borderRadius: '0 4px 4px 0',
								width: '4px',
								height: '38px',
						  }
						: null
				}
			/>
		</Flex>
	);
};
