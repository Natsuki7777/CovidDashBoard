import { Center } from '@chakra-ui/react';
import { NextPage } from 'next';
import ChartTest from 'src/components/charttest';

const PrefDetail: NextPage = () => {
  return (
    <Center w="full" h="full">
      <ChartTest />
    </Center>
  );
};

export default PrefDetail;
