import { Flex } from '@chakra-ui/react';
import { AiOutlinePlus } from 'react-icons/ai';
import { useState } from 'react';
import { GuildPill } from '../../utils/styles';

export const AddGuildIcon = () => {
	let borderRadius = '50%';
	const [isActive, setActive] = useState(false);
	return (
		<Flex
			m="0 0 .6rem 0"
			width="100%"
			position="relative"
			justify="center"
			align="center">
			<Flex
				direction="column"
				align="center"
				justify="center"
				bg={isActive ? '#43b581' : '#36393f'}
				borderRadius={isActive ? '35%' : borderRadius}
				minH="48px"
				minW="48px"
				color={isActive ? '#fff' : '#27ac0d'}
				_hover={{
					cursor: 'pointer',
					borderRadius: '35%',
					bg: '#43b581',
					color: '#fff',
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
				<AiOutlinePlus
					size="28px"
					color="inherit"
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
