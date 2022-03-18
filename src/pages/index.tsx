import ChartTest from '@/components/charttest';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <Flex direction="column" w="full">
      <TopBar />
      <Flex w="full" direction="column">
        <ChartTest />
      </Flex>
    </Flex>
  );
};

const TopBar = () => {
  return (
    <Flex as="header" width="full" h="20" alignItems="center">
      <Box>
        <Heading as="h1" size="md">
          全国の感染者情報
        </Heading>
      </Box>
      <Spacer />
      <Box></Box>
    </Flex>
  );
};

export default Home;
