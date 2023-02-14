import {
	Box,
	Flex,
	IconButton,
	SkeletonCircle,
	Text,
	Tooltip,
} from '@chakra-ui/react';
import { FaMicrophone } from 'react-icons/fa';
import { RiHeadphoneFill } from 'react-icons/ri';
import { IoIosSettings } from 'react-icons/io';

export const AccountBar = () => {
	return (
		<Flex
			align="center"
			shrink="0"
			p=".3rem"
			h="3.9rem"
			bg="#292b2f">
			<Flex
				align="center"
				borderRadius="0.2rem"
				w="9.3rem"
				p="0.2rem"
				cursor="pointer"
				_hover={{
					background: '#42464d',
				}}>
				<SkeletonCircle
					size="9"
					startColor="#ffffff"
					endColor="#3a3e42"
				/>
				<Flex
					ml="0.7rem"
					direction="column">
					<Text
						color="#fff"
						fontSize="0.92rem">
						Username
					</Text>
					<Text
						color="#a2a5aa"
						fontSize="0.8rem">
						#2023
					</Text>
				</Flex>
			</Flex>
			<Flex
				align="center"
				w="auto"
				p="0.2rem"
				ml="4"
				gap="3px">
				<Box>
					<Tooltip
						hasArrow
						label="Mute"
						fontSize="1rem"
						bg="#18191c"
						py="0.3rem"
						px={3}
						borderRadius="0.35rem"
						arrowSize="6">
						<IconButton
							icon={<FaMicrophone />}
							variant="ghost"
							size="sm"
							fontSize="1.3rem"
							color="#cccccc"
							_hover={{
								background: '#36393F',
							}}
						/>
					</Tooltip>
				</Box>
				<Box>
					<Tooltip
						hasArrow
						label="Deafen"
						fontSize="1rem"
						bg="#18191c"
						py="0.3rem"
						px={3}
						borderRadius="0.35rem"
						arrowSize="6">
						<IconButton
							icon={<RiHeadphoneFill />}
							variant="ghost"
							size="sm"
							fontSize="1.5rem"
							color="#cccccc"
							_hover={{
								background: '#36393F',
							}}
						/>
					</Tooltip>
				</Box>
				<Box>
					<Tooltip
						hasArrow
						label="User Settings"
						fontSize="1rem"
						bg="#18191c"
						py="0.4rem"
						px={4}
						borderRadius="0.35rem"
						arrowSize="6">
						<IconButton
							icon={<IoIosSettings />}
							variant="ghost"
							size="sm"
							fontSize="1.6rem"
							color="#cccccc"
							_hover={{
								background: '#36393F',
							}}
						/>
					</Tooltip>
				</Box>
			</Flex>
		</Flex>
	);
};
