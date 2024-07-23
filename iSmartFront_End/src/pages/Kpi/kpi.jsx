import CustomHeader from "../../components/CustomHeader/customHeader";
import SideBar from "../../components/SideBar/sideBar";
import CustomChartBar from "../../components/CustomChartBar/CustomChartBar";
import graphContext from "../../context/graphContext";
import { Bar } from "react-chartjs-2";
import CardMid from "../../components/CardMid/cardMid";
import CustomChartLine from "../../components/CustomChartLine/CustomChartLine";
import CustomChartLine2 from "../../components/CustomChartLine/CustomChartLine2";
import React, { useContext, useEffect   } from "react"; 
import "./kpi.scss";
import CustomChartBartwo from "../../components/CustomChartBar/CustomChartBartwo";
import CustomChartBarLinear from "../../components/CustomChartBar/CustomChartBarLinear";
import ProgressBarPourcentageAbonne from "../../components/CustomChartBar/ProgressBarPourcentageAbonne";
import CustomChartBarVille from "../../components/CustomChartBar/CustomChartBarVille";
 


const Kpi = () => {
  
    return ( 
    <div className="cntr">
      <SideBar active="kpi" />
      <div className="page-cntr">
        <CustomHeader value="Key Performence Indecators" />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
           <div style={{ flex: 2 }}>
               <CardMid title="Average charging time per terminal per month" child={<CustomChartLine />} />
            </div>
           <div style={{ flex: 2 }}>
              <CardMid title="Average charging time per charging station per month" child={<CustomChartLine2 />} />
           </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
           <div style={{ flex: 2 }}>
           <CardMid title="Proportion in age by age bracket" child={<CustomChartBartwo />}/>
            </div>
           <div style={{ flex: 2 }}>
           <CardMid title="Proportion in age by age bracket" child={<CustomChartBar />}/>
           </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'row' }}>
           <div style={{ flex: 2 }}>
           <CardMid title="percentage of users per city" child={<CustomChartBarLinear />}/>
            </div>
            <div style={{ flex: 2 }}>
            <CardMid title="Abonnés vs non Abonnés" child={<ProgressBarPourcentageAbonne/> }/>

            </div>
         </div>

         <div style={{ display: 'flex', flexDirection: 'column' }}>
           <div style={{ flex: 0.6 ,height:600}}>
           <CardMid title="proportion of subscribers per city" child={<CustomChartBarVille />}/>
            </div>

        </div>
       </div>
    </div>
     );
}
 
export default Kpi;