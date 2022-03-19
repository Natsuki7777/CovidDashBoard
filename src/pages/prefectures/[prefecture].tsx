import { Prefecture, prefectureList } from '@/types/prefecture';
import { DataList, fetchPrefData } from '@/types/prefectureData';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import { NextPage } from 'next';

export const getStaticPaths = async () => {
  // 都道府県のパスを生成
  const paths = prefectureList.map((pref: Prefecture) => ({
    params: {
      prefecture: pref.name,
    },
  }));
  return { paths, fallback: 'blocking' };
};

interface Params {
  prefecture: string;
}

export const getStaticProps = async ({ ...params }: Params) => {
  // 作成されていないPathなら404へリダイレクト
  prefectureList.forEach((pref: Prefecture) => {
    if (pref.name == params.prefecture) {
      return {
        redirect: {
          destination: '/404',
          permanent: false,
        },
      };
    }
  });
  // paramで指定された県の情報を取得
  const prefData: DataList = await fetchPrefData(params.prefecture);
  return {
    props: prefData,
  };
};

const Home: NextPage<DataList> = ({ ...props }: DataList) => {
  return (
    <Flex direction="column" w="full" h="full">
      <TopBar />
      <Flex w="full" direction="column"></Flex>
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
