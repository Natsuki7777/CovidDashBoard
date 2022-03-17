import Preflist from '@/components/preflist';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Table, Tbody, Text, Th, Tr } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

const Test: NextPage = () => {
  const [flag, setFlag] = useState(true);
  const onClickSort = () => {
    setFlag(!flag);
    console.log('ソート');
  };

  return (
    <>
      <Text>各都道府県のコロナ感染状況</Text>
      <Table variant="simple" fontSize="xs" my={8} colorScheme="gray">
        <Tbody>
          <Tr bgColor={'gray.300'}>
            <Th onClick={onClickSort} _hover={{ cursor: 'pointer' }}>
              都道府県
              {flag ? <ArrowDownIcon ml={1} w={4} h={4} /> : <ArrowUpIcon ml={1} w={4} h={4} />}
            </Th>
            <Th textAlign="center" onClick={onClickSort} _hover={{ cursor: 'pointer' }}>
              合計陽性者数
            </Th>
            <Th textAlign="center" onClick={onClickSort} _hover={{ cursor: 'pointer' }}>
              合計重症者数
            </Th>
            <Th textAlign="center" onClick={onClickSort} _hover={{ cursor: 'pointer' }}>
              合計死亡者数
            </Th>
            <Th></Th>
          </Tr>

          <Preflist name="北海道" slug="hokkaido" total={3000} heavy={10} dead={200} />
          <Preflist name="青森県" slug="aomori" total={3} heavy={5} dead={2} />
          <Preflist name="岩手県" slug="iwate" total={300} heavy={300} dead={200} />
        </Tbody>
      </Table>
    </>
  );
};

export default Test;
