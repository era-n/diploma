import { Flex, Skeleton, SkeletonCircle } from '@chakra-ui/react';

export const DMPlaceholder = () => {
	return (
		<Flex
			align={'center'}
			m="3">
			<SkeletonCircle
				size="10"
				startColor="#484c53"
				endColor="#3a3e42"
			/>
			<Skeleton
				ml="2"
				height="20px"
				w="144px"
				borderRadius="10px"
				startColor="#484c53"
				endColor="#3a3e42"
			/>
		</Flex>
	);
};
