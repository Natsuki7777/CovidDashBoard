import { Flex } from '@chakra-ui/react';
import Link from 'next/link';

// TODO: 都道府県のリンクの良い名前が思いつかないので、testにしといた
// TODO: 選択されたらselectedをtrueにする
// TODO: あとはデザインをいじるだけ

const Drawer = () => {
  return (
    <Flex bg="white" w="240px" h="full" direction="column" fontSize="md" fontWeight="bold">
      <NavBox selected={true} text="全国" route="/home" />
      <NavBox selected={false} text="都道府県別" route="/test" />
    </Flex>
  );
};

const NavBox = ({ selected, text, route }: { selected: boolean; text: string; route: string }) => {
  return (
    <Link href={route}>
      <Flex
        w="full"
        h="64px"
        alignItems="center"
        px="32px"
        bg={selected ? 'teal' : 'white'}
        color={selected ? 'white' : ''}
        _hover={{
          bg: selected ? 'teal.400' : 'gray.100',
        }}
      >
        {text}
      </Flex>
    </Link>
  );
};

export default Drawer;
