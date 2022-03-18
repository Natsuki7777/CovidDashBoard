import Header from '@/components/header';
import { Flex } from '@chakra-ui/react';
import Sidebar from 'src/components/sidebar';

const Layout = ({ children }: { children: any }) => {
  return (
    <Flex w="100vw" h="100vh" direction="column">
      <Header />
      <Flex w="100vw" flex="1">
        <Sidebar />
        <Flex flex="1" bg="gray.100" px={8} w="full" h="full">
          {children}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Layout;
