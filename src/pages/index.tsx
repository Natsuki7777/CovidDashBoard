import PcrTimeChartBox from '@/components/pcr-time-chart-box';
import TimeChartBox from '@/components/time-chart-box';
import { fetchPcrData, PcrData } from '@/types/pcrData';
import { DataList, fetchPrefData } from '@/types/prefectureData';
import { Box, Flex, Heading, Spacer } from '@chakra-ui/react';
import 'chart.js/auto';
import { NextPage } from 'next';

export const getStaticProps = async () => {
  const japaneseData: DataList = await fetchPrefData('ALL');
  const pcrDataList: PcrData[] = await fetchPcrData();
  return {
    props: {
      japaneseData: japaneseData,
      pcrDataList: pcrDataList,
    },
  };
};

interface Props {
  japaneseData: DataList;
  pcrDataList: PcrData[];
}

const Home: NextPage<Props> = ({ ...props }: Props) => {
  return (
    <Flex direction="column" w="full" h="full">
      <TopBar />
      <TimeChartBox dataList={props.japaneseData} />
      <PcrTimeChartBox pcrDataList={props.pcrDataList} />
    </Flex>
  );
};

const TopBar = () => {
  return (
    <Flex as="header" width="full" h="20" alignItems="center">
      <Box>
        <Heading as="h1" size="md" letterSpacing={2}>
          全国の感染者情報
        </Heading>
      </Box>
      <Spacer />
      <Box></Box>
    </Flex>
  );
};

export default Home;
