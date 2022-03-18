import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Drawer, DrawerContent, DrawerOverlay, Flex, IconButton, Spacer, Text, useDisclosure } from '@chakra-ui/react';
import DrawerMenu from './drawerMenu';

const Header = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex as="header" width="full" h={16} alignItems="center" bg="gray.900" px="4">
        <Flex color="gray.100" h={8} alignItems="center">
          <IconButton
            _focus={{ outline: 'none' }}
            mr={3}
            aria-label="menu"
            icon={<HamburgerIcon />}
            size="sm"
            variant="unstyled"
            display={{ base: 'block', md: 'none' }}
            onClick={onOpen}
          />
          <Text fontWeight="bold">COVIDVIEW</Text>
        </Flex>
        <Spacer />
        <Box></Box>
      </Flex>
      <Drawer placement="left" size="xs" isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerMenu />
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Header;
