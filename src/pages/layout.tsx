import { Flex } from '@chakra-ui/react';
import Drawer from 'src/components/drawer';
import Header from 'src/components/header';

const Layout = ({ children }: { children: any }) => {
  return (
    <Flex bg="gray.100" w="100vw" h="100vh">
      <Drawer />
      <Flex direction="column" w="full" h="100vh" px={12}>
        <Header />
        {children}
      </Flex>
    </Flex>
  );
};

export default Layout;
