import { Center } from '@chakra-ui/react';
import { NextPage } from 'next';
import ChartTest from 'src/components/charttest';

const Home: NextPage = () => {
  return (
    <Center w="full" h="full">
      <ChartTest />
    </Center>
  );
};

export default Home;
