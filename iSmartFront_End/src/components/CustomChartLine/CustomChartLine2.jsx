import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';
import faker from 'faker';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: false,
    },
  },
};

const labels = ['January', 'February', 'March', 'April'];

// Créer un tableau de données avec des nombres aléatoires
const dataValues = labels.map(() => faker.datatype.number({ min: -50, max: 300 }));

// Trier les données de manière décroissante
dataValues.sort((a, b) => b - a);

export const data = {
  labels,
  datasets: [
    {
      label: 'Time in hours',
      data: dataValues,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function CustomChartLine2() {
  return <Line options={options} data={data} />;
}

export default CustomChartLine2;
