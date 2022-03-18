import Preflist from '@/components/preflist';
import { ArrowDownIcon, ArrowUpIcon } from '@chakra-ui/icons';
import { Table, Tbody, Text, Th, Tr } from '@chakra-ui/react';
import { NextPage } from 'next';
import { useState } from 'react';

const Test: NextPage = () => {
  const [data, setData] = useState([
    {
      name: '北海道',
      slug: 'hokkaido',
      id: 0,
      total: 3000,
      heavy: 10,
      dead: 200,
    },
    {
      name: '青森県',
      slug: 'aomori',
      id: 1,
      total: 300,
      heavy: 1,
      dead: 20,
    },
    {
      name: '岩手県',
      slug: 'iwate',
      id: 2,
      total: 600,
      heavy: 400,
      dead: 100,
    },
  ]);
  const [flagPref, setFlagPref] = useState<number>(1);
  const [flagTotal, setFlagTotal] = useState<number>(0);
  const [flagHeavy, setFlagHeavy] = useState<number>(0);
  const [flagDead, setFlagDead] = useState<number>(0);

  const onClickSortPref = () => {
    setFlagPref(flagPref + 1);
    setFlagTotal(0);
    setFlagHeavy(0);
    setFlagDead(0);
    (flagPref + 1) % 3 == 0 ? sortDefault(data) : (flagPref + 1) % 3 == 1 ? sortDown(data) : sortUp(data);
  };
  const onClickSortTotal = () => {
    setFlagTotal(flagTotal + 1);
    setFlagPref(0);
    setFlagHeavy(0);
    setFlagDead(0);
    (flagTotal + 1) % 3 == 0 ? sortDefault(data) : (flagTotal + 1) % 3 == 1 ? sortDown(data) : sortUp(data);
  };
  const onClickSortHeavy = () => {
    setFlagHeavy(flagHeavy + 1);
    setFlagPref(0);
    setFlagTotal(0);
    setFlagDead(0);
    (flagHeavy + 1) % 3 == 0 ? sortDefault(data) : (flagHeavy + 1) % 3 == 1 ? sortDown(data) : sortUp(data);
  };
  const onClickSortDead = () => {
    setFlagDead(flagDead + 1);
    setFlagPref(0);
    setFlagTotal(0);
    setFlagHeavy(0);
    (flagDead + 1) % 3 == 0 ? sortDefault(data) : (flagDead + 1) % 3 == 1 ? sortDown(data) : sortUp(data);
  };

  const sortDown = (array: any) => {
    array.sort((a: any, b: any) => {
      return b.dead - a.dead;
    });
    setData(array);
  };

  const sortUp = (array: any) => {
    array.sort((a: any, b: any) => {
      return a.dead - b.dead;
    });
    setData(array);
  };
  const sortDefault = (array: any) => {
    array.sort((a: any, b: any) => {
      return a.id - b.id;
    });
    setData(array);
  };

  return (
    <>
      <Text fontWeight="bold">各都道府県のコロナ感染状況</Text>
      <Table variant="simple" fontSize="xs" my={8} colorScheme="gray">
        <Tbody>
          <Tr bgColor={'gray.300'}>
            <Th w="23%" h="43px" onClick={onClickSortPref} _hover={{ cursor: 'pointer' }}>
              都道府県
              {flagPref % 3 == 0 ? <></> : flagPref % 3 == 1 ? <ArrowDownIcon ml={1} w={4} h={4} /> : <ArrowUpIcon ml={1} w={4} h={4} />}
            </Th>
            <Th w={'23%'} textAlign="center" onClick={onClickSortTotal} _hover={{ cursor: 'pointer' }}>
              合計陽性者数
              {flagTotal % 3 == 0 ? <></> : flagTotal % 3 == 1 ? <ArrowDownIcon ml={1} w={4} h={4} /> : <ArrowUpIcon ml={1} w={4} h={4} />}
            </Th>
            <Th w={'23%'} textAlign="center" onClick={onClickSortHeavy} _hover={{ cursor: 'pointer' }}>
              合計重症者数
              {flagHeavy % 3 == 0 ? <></> : flagHeavy % 3 == 1 ? <ArrowDownIcon ml={1} w={4} h={4} /> : <ArrowUpIcon ml={1} w={4} h={4} />}
            </Th>
            <Th w={'23%'} textAlign="center" onClick={onClickSortDead} _hover={{ cursor: 'pointer' }}>
              合計死亡者数
              {flagDead % 3 == 0 ? <></> : flagDead % 3 == 1 ? <ArrowDownIcon ml={1} w={4} h={4} /> : <ArrowUpIcon ml={1} w={4} h={4} />}
            </Th>
            <Th></Th>
          </Tr>
          {data.map((pref: any) => (
            <Preflist key={pref.id} name={pref.name} slug={pref.slug} total={pref.total} heavy={pref.heavy} dead={pref.dead} />
          ))}
        </Tbody>
      </Table>
    </>
  );
};

export default Test;
