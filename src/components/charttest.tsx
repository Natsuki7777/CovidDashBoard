import { Box } from '@chakra-ui/react';
import 'chart.js/auto';
import { ChartData } from 'chart.js/auto';
import { MouseEvent, useRef } from 'react';
import { Chart } from 'react-chartjs-2';

const ChartTest = () => {
  const DATA_COUNT = 12;
  const labels: string[] = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const data01 = [0, 20, 20, 60, 60, 120, 100, 180, 120, 125, 105, 110, 170];
  const data02 = [0, 30, 10, 20, 20, 80, 20, 300, 280, 240, 140, 80, 60];

  const dataConfig = (label: string, data: number[], color: string) => {
    return {
      label: label,
      data: data,
      borderColor: color,
      backgroundColor: color + '20',
      fill: true,
      cubicInterpolationMode: 'monotone',
      tension: 0.4,
      pointStyle: 'circle',
      pointRadius: 2,
      pointHoverRadius: 12,
    };
  };

  const data: ChartData = {
    labels: labels,
    datasets: [dataConfig('死亡者数', data01, '#0BC5EA'), dataConfig('重症者数', data02, '#9F7AEA')],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          usePointStyle: true,
        },
      },
      tooltip: {
        // TODO: tooltipを見やすくしたい
      },
    },
    interaction: {
      intersect: false,
    },
    scales: {
      x: {
        display: true,
        title: {
          display: true,
          text: '期間',
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
          stepSize: 100,
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

export default ChartTest;
