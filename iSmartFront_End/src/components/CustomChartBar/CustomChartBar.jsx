
import React, { useState, useContext, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import UsersContext from "../../context/usersContext";

const CustomChartBar = () => {
  const { users, fetchUsers } = useContext(UsersContext);    
  const [data, setData] = useState({
    ageVingtCinq: { femme: 0, homme: 0 },
    agetrenteCinq: { femme: 0, homme: 0 },
    ageQuaranteCinq: { femme: 0, homme: 0 },
    agesuper: { femme: 0, homme: 0 },
    totalAge: 0
  }); 
  
  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    // Calculer les totaux des groupes d'âge par genre
    const ageVingtCinqTotal = { femme: 0, homme: 0 };
    const agetrenteCinqTotal = { femme: 0, homme: 0 };
    const ageQuaranteCinqTotal = { femme: 0, homme: 0 };
    const agesuperTotal = { femme: 0, homme: 0 };

    users.forEach(user => {
      if (user.age < 26) {
        if (user.genre === "FEMME") ageVingtCinqTotal.femme++;
        else ageVingtCinqTotal.homme++;
      } else if (user.age >= 26 && user.age < 36) {
        if (user.genre === "FEMME") agetrenteCinqTotal.femme++;
        else agetrenteCinqTotal.homme++;
      } else if (user.age >= 36 && user.age < 46) {
        if (user.genre === "FEMME") ageQuaranteCinqTotal.femme++;
        else ageQuaranteCinqTotal.homme++;
      } else {
        if (user.genre === "FEMME") agesuperTotal.femme++;
        else agesuperTotal.homme++;
      }
    });

    const totalAge = ageVingtCinqTotal.femme + ageVingtCinqTotal.homme +
                     agetrenteCinqTotal.femme + agetrenteCinqTotal.homme +
                     ageQuaranteCinqTotal.femme + ageQuaranteCinqTotal.homme +
                     agesuperTotal.femme + agesuperTotal.homme;

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
  const ageVingtCinqDataPercentageFemme = Math.round(
    (data.ageVingtCinq.femme / data.totalAge) * 100
  );
  const ageVingtCinqDataPercentageHomme = Math.round(
    (data.ageVingtCinq.homme / data.totalAge) * 100
  );
  const agetrenteCinqDataPercentageFemme = Math.round(
    (data.agetrenteCinq.femme / data.totalAge) * 100
  );
  const agetrenteCinqDataPercentageHomme = Math.round(
    (data.agetrenteCinq.homme / data.totalAge) * 100
  );
  const ageQuaranteCinqDataPercentageFemme = Math.round(
    (data.ageQuaranteCinq.femme / data.totalAge) * 100
  );
  const ageQuaranteCinqDataPercentageHomme = Math.round(
    (data.ageQuaranteCinq.homme / data.totalAge) * 100
  );
  const agesuperDataPercentageFemme = Math.round(
    (data.agesuper.femme / data.totalAge) * 100
  );
  const agesuperDataPercentageHomme = Math.round(
    (data.agesuper.homme / data.totalAge) * 100
  );

  // Data for the chart
  const maData = {
    labels: ['10-25', '26-35', '36-45', '+55'],
    datasets: [
      {
        label: 'Woman',
        data: [ageVingtCinqDataPercentageFemme, agetrenteCinqDataPercentageFemme, ageQuaranteCinqDataPercentageFemme, agesuperDataPercentageFemme],
        backgroundColor: 'rgba(255, 0, 98, 0.8)',
      },
      {
        label: 'Men',
        data: [ageVingtCinqDataPercentageHomme, agetrenteCinqDataPercentageHomme, ageQuaranteCinqDataPercentageHomme, agesuperDataPercentageHomme],
        backgroundColor: 'rgba(0, 102, 255, 0.8)',
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
      },
      title: {
        display: true,
      },
    },
  };

  return <Bar options={options} data={maData} />;
};

export default CustomChartBar;





