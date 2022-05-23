import * as React from 'react';
import { Chart } from 'react-google-charts';

const d1 = new Date(1519862400000);
const d2 = new Date(1519862460000);
const rows = [
  [
    { type: 'timeofday', label: null },
    { type: 'number', label: 'linux chrome' },
    { type: 'number', label: 'linux chrome' },
    { type: 'number', label: 'mac chrome' },
    { type: 'number', label: 'mac chrome' },
    { type: 'number', label: 'mac firefox' },
    { type: 'number', label: 'mac firefox' },
    { type: 'number', label: 'linux firefox' },
    { type: 'number', label: 'linux firefox' },

  ],
  [[d1.getHours(), d1.getMinutes(), d1.getSeconds()], 0.1, 1.3, 0.2, 1.2, 0.3, 1.2, 0.1, 1.0],
  [[d2.getHours(), d2.getMinutes(), d2.getSeconds()], 0.2, 0.9, 0.1, 1.0, 0.2, 1.1, 0.3, 1.4],
];

function ChartLine() {
  return (
    <Chart
      chartType="Line"
      data={rows}
      options={{
        legend: null,
        hAxis: {
          minValue: 0,
          maxValue: 1,
          legend: 'none',
          ticks: { 0: '1', 1: '2' },
        },
      }}
      width="90%"
      height="400px"
    />
  );
}

export default ChartLine;
