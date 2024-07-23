import React, { useState, useContext, useEffect } from "react";
import ProgressBarPourcentage from "./ProgressBarPourcentage";
import UsersContext from "../../context/usersContext";

const ProgressBarPourcentageAbonne = () => {
    const { users, fetchUsers } = useContext(UsersContext);    
    const [abonneStats, setAbonneStats] = useState({ abonnes: 0, nonAbonnes: 0 });

    useEffect(() => {
        // Calculer le nombre d'abonnés et de non-abonnés
        const abonnesCount = users.filter(user => user.abonne === "OUI").length;
        const nonAbonnesCount = users.length - abonnesCount;
        // Mettre à jour l'état avec les statistiques
        setAbonneStats({ abonnes: abonnesCount, nonAbonnes: nonAbonnesCount });
    }, [users]);

    return (
        <div>
            <div style={{ marginTop: '50px' }}>
                <span style={{ marginLeft: '30px' }}>Abonnés</span>
                <ProgressBarPourcentage
                    bgcolor="rgba(97, 179, 103, 0.8)"
                    progress={Math.round((abonneStats.abonnes / users.length) * 100)}
                    height={30}
                />
            </div>
            <div>
                <span style={{ marginLeft: '30px' }}>Non Abonnés</span>
                <ProgressBarPourcentage
                    bgcolor="rgb(255,69,0)"
                    progress={Math.round((abonneStats.nonAbonnes / users.length) * 100)}
                    height={30}
                />
            </div>
        </div>
    );
};

export default ProgressBarPourcentageAbonne;
