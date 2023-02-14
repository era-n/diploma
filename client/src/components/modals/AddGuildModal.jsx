import {
	Button,
	Divider,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	VStack,
} from '@chakra-ui/react';

export const AddGuildModal = () => {
	return (
		<Modal
			isOpen={isOpen}
			onClose={submitClose}
			isCentered
			size="sm">
			<ModalOverlay />
			{screen === 'INVITE' && (
				<JoinServerModal
					goBack={goBack}
					submitClose={submitClose}
				/>
			)}
			{screen === 'CREATE' && (
				<CreateServerModal
					goBack={goBack}
					submitClose={submitClose}
				/>
			)}
			{screen === 'START' && (
				<ModalContent bg="brandGray.light">
					<ModalHeader
						textAlign="center"
						fontWeight="bold">
						Create a server
					</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<VStack spacing="5">
							<Text textAlign="center">
								Your server is where you and your friends hang
								out. Make yours and start talking.
							</Text>

							<Button
								background="highlight.standard"
								color="white"
								type="submit"
								_hover={{ bg: 'highlight.hover' }}
								_active={{ bg: 'highlight.active' }}
								_focus={{ boxShadow: 'none' }}
								w="full"
								onClick={() => setScreen('CREATE')}>
								Create My Own
							</Button>

							<Divider />

							<Text>Have an invite already?</Text>

							<Button
								mt="4"
								background="highlight.standard"
								color="white"
								type="submit"
								_hover={{ bg: 'highlight.hover' }}
								_active={{ bg: 'highlight.active' }}
								_focus={{ boxShadow: 'none' }}
								w="full"
								onClick={() => setScreen('INVITE')}>
								Join a Server
							</Button>
						</VStack>
					</ModalBody>
				</ModalContent>
			)}
		</Modal>
	);
};
