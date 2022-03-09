import { Box, Button, Flex, Heading, Spacer } from '@chakra-ui/react';

const Header = () => {
  return (
    <Flex as="header" width="full" py={4} alignItems="center">
      <Box>
        <Heading as="h1" size="md">
          ホーム
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="teal">ログイン</Button>
      </Box>
    </Flex>
  );
};

export default Header;
