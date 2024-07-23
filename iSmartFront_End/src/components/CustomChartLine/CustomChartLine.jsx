import React, { useState, useContext, useEffect } from "react";
import transactionsContext from "../../context/transactionContext";

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

const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];

export const data = {
  labels,
  datasets: [
    {
      label: 'Time in hours',
      data: labels.map(() => faker.datatype.number({ min: 0, max: 300 })),
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

function CustomChartLine() {
  return <Line options={options} data={data} />;
}

export default CustomChartLine;
/*
import React, { useState, useContext, useEffect } from "react";
import { Line } from 'react-chartjs-2';
import transactionsContext from "../../context/transactionContext";
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const CustomChartLine = () => {
  const { transactions, fetchTransactions } = useContext(transactionsContext);
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    let isMounted = true;

    const calculateTimeData = () => {
      const monthLabels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      const monthlyData = Array.from({ length: 12 }, () => ({ totalDuration: 0, count: 0 }));

      transactions.forEach((transaction) => {
        const transactionDate = new Date(transaction.date.$date);
        const month = transactionDate.getMonth();
        const duration = parseFloat(transaction.duration);
        if (!isNaN(duration)) {
          monthlyData[month].totalDuration += duration;
          monthlyData[month].count += 1;
        }
      });

      const newTimeData = monthlyData.map(data => data.count > 0 ? data.totalDuration / data.count : 0);

      if (isMounted) {
        setTimeData(newTimeData);
      }
    };

    fetchTransactions().then(calculateTimeData).catch(error => console.error('Error fetching transactions:', error));

    return () => {
      isMounted = false;
    };
  }, [fetchTransactions, transactions]);

  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const data = {
    labels,
    datasets: [
      {
        label: 'Average Charging Time in Hours',
        data: timeData,
        borderColor: 'rgb(53, 162, 235)',
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };

  const options = {
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

  return <Line options={options} data={data} />;
};

export default CustomChartLine;
*/