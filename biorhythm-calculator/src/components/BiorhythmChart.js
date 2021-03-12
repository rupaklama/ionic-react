import React from 'react';
import {
  LineChart,
  Line,
  XAxis,
  // YAxis,
  // CartesianGrid,
  // Tooltip,
  // Legend,
  ResponsiveContainer,
} from 'recharts';

// mock data
const data = [
  { date: '03-09-2021', physical: 0.99, emotional: 0.5, intellectual: -0.25 },
  { date: '03-10-2021', physical: 0.37, emotional: -0.5, intellectual: -0.85 },
  { date: '03-11-2021', physical: -0.1, emotional: -0.9, intellectual: 0.48 },
];

const BiorhythmChart = () => {
  return (
    <ResponsiveContainer width='100%' height={200}>
      <LineChart data={data}>
        {/** to draw line */}
        <XAxis dataKey='date' />
        <Line dataKey='physical' stroke='green' />
        <Line dataKey='emotional' stroke='red' />
        <Line dataKey='intellectual' stroke='blue' />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default BiorhythmChart;
