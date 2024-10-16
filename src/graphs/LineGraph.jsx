import React from 'react'
import { GraphData } from './GraphData';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    scales,
  } from 'chart.js';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

const LineGraph = () => {
    const options={
        responsive: true,
        plugins: {
          legend: {
            position: 'top',
            
          },
          title: {
            display: true,
            text: 'ECL Clac',
          },
        },
      
    }
  return (
    <Line options={options} data={GraphData} />
  )
}

export default LineGraph