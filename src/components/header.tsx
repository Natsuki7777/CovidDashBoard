import { HamburgerIcon } from '@chakra-ui/icons';
import { Box, Flex, Spacer, Text } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as="header" width="full" h={16} alignItems="center" bg="gray.900" px="4">
      <Flex color="gray.100" h={8} alignItems="center">
        <HamburgerIcon mr={4} />
        <Text fontWeight="bold">COVIDVIEW</Text>
      </Flex>
      <Spacer />
      <Box></Box>
    </Flex>
  );
};

export default Header;
