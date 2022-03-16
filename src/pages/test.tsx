import Preflist from '@/components/preflist';
import { Center, Table, Tbody, Text, Th, Tr } from '@chakra-ui/react';
import { NextPage } from 'next';

const Test: NextPage = () => {
  return (
    <>
      <Text>各都道府県のコロナ感染状況</Text>
      <Center w="full" h="full">
        <Table variant="simple" colorScheme={'whiteAlpha'} fontSize="xs" borderRadius={'2xl'} mt={'-20'}>
          <Tbody>
            <Tr bgColor={'gray.300'}>
              <Th>都道府県</Th>
              <Th textAlign="center">合計陽性者数</Th>
              <Th textAlign="center">合計重症者数</Th>
              <Th textAlign="center">合計死亡者数</Th>
              <Th></Th>
            </Tr>

            <Preflist name="北海道" total="3000" heavy="10" dead="200" />
            <Preflist name="北海道" total="3000" heavy="10" dead="200" />
            <Preflist name="北海道" total="3000" heavy="10" dead="200" />
            <Preflist name="北海道" total="3000" heavy="10" dead="200" />
            <Preflist name="北海道" total="3000" heavy="10" dead="200" />
          </Tbody>
        </Table>
      </Center>
    </>
  );
};

export default Test;
