import { Box } from '@chakra-ui/react';
import 'chart.js/auto';
import { useRef } from 'react';
import { Chart } from 'react-chartjs-2';

const ChartTest = () => {
  const DATA_COUNT = 12;
  const labels: string[] = [];
  for (let i = 0; i < DATA_COUNT; ++i) {
    labels.push(i.toString());
  }
  const datapoints = [0, 20, 20, 60, 60, 120, 100, 180, 120, 125, 105, 110, 170];
  const data = {
    labels: labels,
    datasets: [
      {
        label: 'Cubic interpolation (monotone)',
        data: datapoints,
      },
      {
        label: 'Cubic interpolation',
        data: datapoints,
      },
      {
        label: 'Linear interpolation (default)',
        data: datapoints,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Chart.js Line Chart - Cubic interpolation mode',
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
        },
      },
      y: {
        display: true,
        title: {
          display: true,
          text: 'Value',
        },
        suggestedMin: -10,
        suggestedMax: 200,
      },
    },
  };

  const chartRef = useRef(null);

  return (
    <Box w="full" h="full" bg="white">
      <Chart ref={chartRef} type="line" data={data} options={options} />
    </Box>
  );
};

export default ChartTest;
