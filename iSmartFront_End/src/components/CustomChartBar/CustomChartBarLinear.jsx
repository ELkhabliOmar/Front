import React, { useState, useContext, useEffect } from "react";
import { Bar } from 'react-chartjs-2';
import UsersContext from "../../context/usersContext";

const CustomChartBarLinear = () => {
  const { users, fetchUsers } = useContext(UsersContext);    
  const [villeStats, setVilleStats] = useState({}); 
  
  useEffect(() => {
    fetchUsers().then(() => {
      // Calculer les statistiques des utilisateurs par ville
      const calculateCityStats = () => {
        const newCityStats = {
          'CASABLANCA': 0,
          'AGADIR': 0, 
          'OUJDA': 0, 
          'KENITRA': 0,
          'LARACHE': 0,
          'AZILAL': 0,
          'AL HOCEIMA': 0,
          'KHOURIBGA': 0,
          'BENI MELLAL': 0,
          'BENSLIMANE': 0,
          'BERRECHID':0,
          'FES': 0,
          'MARRAKECH': 0,
          'MEKNES':0,
          'MOHAMMEDIA':0,
          'RABAT': 0,
          'SAFI': 0,
          'SALE': 0,
          'SETTAT': 0,
          'TANGER': 0,
          'TETOUAN': 0
        };

        users.forEach((user) => {
          const city = user.ville;
          // Vérifier si la ville est répertoriée dans les statistiques
          if (newCityStats.hasOwnProperty(city)) {
            // Incrémenter le compteur pour cette ville
            newCityStats[city]++;
          }
        });
        
         // Filtrer les villes avec un nombre d'utilisateurs différent de 0
         const filteredStats = Object.fromEntries(
          Object.entries(newCityStats).filter(([ville, nombre]) => nombre !== 0)
        );

        // Mettre à jour les statistiques des villes
        setVilleStats(filteredStats);
        // setVilleStats(newCityStats);

      };
      

      // Calculer les statistiques une fois que les utilisateurs sont récupérés
      calculateCityStats();
    });
  }, [users]); // <- Mettre users comme dépendance

  // Data for the chart
  const maData = {
    labels: Object.keys(villeStats),
    datasets: [
      {
        label: 'Nombre dutilisateurs',
        data: Object.values(villeStats),
        backgroundColor: 'rgba(97, 179, 103, 0.8)',
        barThickness: 15,
      },
    ],
  };

  // Options for the chart
  const options = {
    responsive: true,
       /* y: {
      suggestedMax: 100, // Fixer la valeur maximale de l'axe y à 100
    },*/
    
    plugins: {
      legend: {
        position: 'top',
        display: false,
      },
      title: {
        display: true,
      },
    },
    indexAxis: 'y', // Définit l'orientation du graphique vers la droite
    scales: {
      x: {
        ticks: {
          stepSize: 1 // Définir le pas de l'axe x
        }
      }
    }
  };

  return <Bar options={options} data={maData} />;
};

export default CustomChartBarLinear;
