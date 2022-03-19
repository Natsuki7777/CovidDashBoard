import { PcrData } from '@/types/pcrData';
import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import 'chart.js/auto';
import { ChartData } from 'chart.js/auto';
import { MouseEvent, useRef } from 'react';
import { Chart } from 'react-chartjs-2';

const PcrTimeChartBox = ({ pcrDataList }: { pcrDataList: PcrData[] }) => {
  return (
    <Flex w="full" direction="column" borderRadius="4px" border="1px" borderColor="gray.300">
      <HStack bg="gray.300" w="full" h="14" px="4">
        <Text fontSize="14" fontWeight="bold">
          PCR
        </Text>
      </HStack>
      <Box p={8} bg="white">
        <PcrChartBox pcrDataList={pcrDataList} />
      </Box>
    </Flex>
  );
};
const PcrChartBox = ({ pcrDataList }: { pcrDataList: PcrData[] }) => {
  const totalDataList: number[] = pcrDataList.map((data) => data.total);

  const labels: string[] = [];
  pcrDataList.forEach((data: PcrData) => {
    labels.push(data.date);
  });

  const dataConfig = (label: string, data: number[], color: string) => {
    return {
      label: label,
      data: data,
      backgroundColor: color,
      fill: true,
    };
  };

  const data: ChartData = {
    labels: labels,
    datasets: [dataConfig('PCR', totalDataList, '#0BC5EA')],
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
        stacked: true,
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
      <Chart ref={chartRef} type="bar" data={data} options={options} onClick={chartOnClick} />
    </Box>
  );
};

export default PcrTimeChartBox;
