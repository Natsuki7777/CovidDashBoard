import { Data, DataList } from '@/types/prefectureData';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import 'chart.js/auto';
import { ChartData } from 'chart.js/auto';
import { MouseEvent, useRef } from 'react';
import { Chart } from 'react-chartjs-2';

const TimeChartBox = ({ dataList }: { dataList: DataList }) => {
  return (
    <Flex w="full" direction="column" borderRadius="4px" border="1px" borderColor="gray.300">
      <HStack bg="gray.300" w="full" h="14" px="4">
        <Text fontSize="14" fontWeight="bold">
          感染状況
        </Text>
      </HStack>
      <Box p={8} bg="white">
        <JapaneseChartBox japaneseData={dataList} />
      </Box>
    </Flex>
  );
};
const JapaneseChartBox = ({ japaneseData }: { japaneseData: DataList }) => {
  const severeCaseDataList: number[] = japaneseData.severeCaseList.map((data: Data) => data.value);
  const positiveCaseDataList: number[] = japaneseData.positiveCaseList.map((data: Data) => data.value);
  const deathCaseDataList: number[] = japaneseData.deathCaseList.map((data: Data) => data.value);

  const labels: string[] = [];
  japaneseData.positiveCaseList.forEach((data: Data) => {
    labels.push(data.date);
  });

  const dataConfig = (label: string, data: number[], color: string) => {
    return {
      label: label,
      data: data,
      borderColor: color,
      backgroundColor: color + '20',
      fill: true,
      cubicInterpolationMode: 'monotone',
      tension: 4,
      pointStyle: 'circle',
      pointRadius: 0,
      hoverBorderWidth: 6,
      hoverBackgroundColor: '#FFFFFF',
      hoverBorderColor: color,
      pointHoverRadius: 8,
    };
  };

  const data: ChartData = {
    labels: labels,
    datasets: [
      dataConfig('陽性者数', positiveCaseDataList, '#0BC5EA'),
      dataConfig('重症者数', severeCaseDataList, '#4299E1'),
      dataConfig('死亡者数', deathCaseDataList, '#9F7AEA'),
    ],
  };

  const options: {} = {
    responsive: true,

    plugins: {
      legend: {
        display: false,
        position: 'chartArea',
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        // TODO: tooltipを見やすくしたい
      },
    },
    interaction: {
      mode: 'index',
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: '期間',
        },
        ticks: {
          callback: (val: number, index: number) => {
            return index % 30 === 0 ? index.toString() : '';
          },

          textStrokeColor: '#0BC5EA',
        },
        grid: {
          display: false,
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: '人数',
        },
        ticks: {
          stepSize: 40000,
        },
        grid: {
          // display: false,
        },
        gridLines: {
          display: false,
        },
      },
    },
  };

  const chartRef = useRef();

  const chartOnClick = (event: MouseEvent) => {
    console.log('ここで何かしようかな', event);
  };

  return (
    <Box w="full" h="full" bg="white">
      <Chart ref={chartRef} type="line" data={data} options={options} onClick={chartOnClick} />
    </Box>
  );
};

export default TimeChartBox;
