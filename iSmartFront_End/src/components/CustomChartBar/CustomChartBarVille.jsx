import React, { useContext, useState, useEffect } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import UsersContext from "../../context/usersContext";

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const CustomChartBarVille = () => {
  const { users, fetchUsers } = useContext(UsersContext);
  const [villeStats, setVilleStats] = useState({});

  useEffect(() => {
    fetchUsers().then(() => {
      // Calculer les statistiques des utilisateurs par ville
      const calculateCityStats = () => {
        const newCityStats = {
          'CASABLANCA': { total: 0, abonnes: 0 },
          'AGADIR': { total: 0, abonnes: 0 }, 
          'OUJDA': { total: 0, abonnes: 0 }, 
          'KENITRA': { total: 0, abonnes: 0 },
          'LARACHE': { total: 0, abonnes: 0 },
          'AZILAL': { total: 0, abonnes: 0 },
          'AL HOCEIMA': { total: 0, abonnes: 0 },
          'KHOURIBGA': { total: 0, abonnes: 0 },
          'BENI MELLAL': { total: 0, abonnes: 0 },
          'BENSLIMANE': { total: 0, abonnes: 0 },
          'BERRECHID': { total: 0, abonnes: 0 },
          'FES': { total: 0, abonnes: 0 },
          'MARRAKECH': { total: 0, abonnes: 0 },
          'MEKNES': { total: 0, abonnes: 0 },
          'MOHAMMEDIA': { total: 0, abonnes: 0 },
          'RABAT': { total: 0, abonnes: 0 },
          'SAFI': { total: 0, abonnes: 0 },
          'SALE': { total: 0, abonnes: 0 },
          'SETTAT': { total: 0, abonnes: 0 },
          'TANGER': { total: 0, abonnes: 0 },
          'TETOUAN': { total: 0, abonnes: 0 }
  
        };

        users.forEach((user) => {
          const city = user.ville;
          // Vérifier si la ville est répertoriée dans les statistiques
          if (newCityStats.hasOwnProperty(city)) {
            // Incrémenter le total pour cette ville
            newCityStats[city].total++;
            // Vérifier si l'utilisateur est abonné
            if (user.abonne === "OUI") {
              // Incrémenter le nombre d'abonnés pour cette ville
              newCityStats[city].abonnes++;
            }
          }
        });

        // Calculer le pourcentage d'abonnés pour chaque ville
        for (const city in newCityStats) {
          const total = newCityStats[city].total;
          const abonnes = newCityStats[city].abonnes;
          if (total > 0) {
            newCityStats[city].pourcentageAbonnes = (abonnes / total) * 100;
          } else {
            newCityStats[city].pourcentageAbonnes = 0;
          }
        }

        // Mettre à jour les statistiques des villes
        setVilleStats(newCityStats);
      };

      // Calculer les statistiques une fois que les utilisateurs sont récupérés
      calculateCityStats();
    });
  }, [users]);

  // Data for the chart
  const maData = {
    labels: Object.keys(villeStats),
    datasets: [
      {
        label: 'Pourcentage d\'abonnés',
        data: Object.values(villeStats).map(cityStats => cityStats.pourcentageAbonnes),
        backgroundColor: 'rgba(97, 179, 103, 0.8)',
        barThickness: 25,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: true,
      },
    },
    scales: {
      x: {
        ticks: {
          stepSize: 1
        }
      },
      y: {
        suggestedMax: 100,
      },
    },
  };

  return <Bar options={options} data={maData} />;
};

export default CustomChartBarVille;


