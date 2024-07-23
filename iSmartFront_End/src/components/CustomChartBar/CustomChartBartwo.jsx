import React, { useState, useContext, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import UsersContext from "../../context/usersContext";

const CustomChartBartwo = () => {
  const { users, fetchUsers } = useContext(UsersContext);    
  const [data, setData] = useState({
    ageVingtCinq: 0,
    agetrenteCinq: 0,
    ageQuaranteCinq: 0,
    agesuper: 0,
    totalAge: 0
  }); 
  
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    // Calculer les totaux des groupes d'âge
    const ageVingtCinqTotal = users.filter(user => user.age < 26).length;
    const agetrenteCinqTotal = users.filter(user => user.age >= 26 && user.age < 36).length;
    const ageQuaranteCinqTotal = users.filter(user => user.age >= 36 && user.age < 46).length;
    const agesuperTotal = users.filter(user => user.age >= 46).length;
    const totalAge = ageVingtCinqTotal + agetrenteCinqTotal + ageQuaranteCinqTotal + agesuperTotal;

    // Mettre à jour le state avec les totaux calculés
    setData({
      ageVingtCinq: ageVingtCinqTotal,
      agetrenteCinq: agetrenteCinqTotal,
      ageQuaranteCinq: ageQuaranteCinqTotal,
      agesuper: agesuperTotal,
      totalAge: totalAge
    });
  }, [users]);

  // Calculate percentage data
  const ageVingtCinqDataPercentage = Math.round(
    (data.ageVingtCinq / data.totalAge) * 100
  );
  const agetrenteCinqDataPercentage = Math.round(
    (data.agetrenteCinq / data.totalAge) * 100
  );
  const ageQuaranteCinqDataPercentage = Math.round(
    (data.ageQuaranteCinq / data.totalAge) * 100
  );
  const agesuperDataPercentage = Math.round(
    (data.agesuper / data.totalAge) * 100
  );

  // Data for the chart
  const maData = {
    labels: ['10-25', '26-35', '36-45', '+55'],
    datasets: [
      {
        label: 'Men',
        data: [agetrenteCinqDataPercentage, ageVingtCinqDataPercentage, agesuperDataPercentage, ageQuaranteCinqDataPercentage],
        backgroundColor: 'rgba(0, 102, 255, 0.8)',
        barThickness: 40,

      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    y: {
      suggestedMax: 100, // Fixer la valeur maximale de l'axe y à 100
    },
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: true,
      },
    },
  };

  return <Bar options={options} data={maData} />;
};

export default CustomChartBartwo;







