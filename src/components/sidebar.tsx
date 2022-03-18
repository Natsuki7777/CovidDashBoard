import { Box, Flex } from '@chakra-ui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { pages } from 'src/types/page';

const Sidebar = () => {
  const router = useRouter();
  return (
    <Flex bg="white" w="180px" h="full" direction="column" fontSize="md" fontWeight="bold" py="16">
      {pages.map((page) => {
        return <NavBox selected={page.route == router.pathname} text={page.text} route={page.route} />;
      })}
    </Flex>
  );
};

const NavBox = ({ selected, text, route }: { selected: boolean; text: string; route: string }) => {
  return (
    <Link href={route}>
      <Flex
        h="64px"
        alignItems="center"
        role="group"
        cursor="pointer"
        bg={selected ? 'gray.200' : 'white'}
        color={selected ? 'gray.900' : 'gray.400'}
        _hover={{
          bg: selected ? 'gray.300' : 'gray.100',
        }}
      >
        <Box w="6px" h="full" bg={selected ? 'gray.900' : 'transparent'} mr="4"></Box>
        {text}
      </Flex>
    </Link>
  );
};

export default Sidebar;
