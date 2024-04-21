import Card from "../../components/CardIcon/Card";
import Header from "../../components/Header/Header";
import Table from "../../components/Table/Table";
import { FaMoneyCheckAlt, FaHistory, FaChartPie, FaDollarSign } from 'react-icons/fa';
import "./styles.css";


function Analise() {
    return(
        <div className="analise-containe">
            <Header 
                title="Principal" 
                subtitle="Análise" 
            />
            <div className="section-content">
                <h3>Segunda Feira 08.04.2024 </h3>
                <div className="section-containe">
                    <div className="section-card"> 
                        <Card 
                            icon={<FaMoneyCheckAlt size={60}/>}
                            title=" Entrada Anual "
                            text=" R$ 50.000,00 "
                            color="dark-ciano"
                        />
                        <Card 
                            icon={<FaChartPie size={60}/>}
                            title=" Saída Anual "
                            text=" R$ 45.000,00 "
                            color="light-yellow"
                        />
                        <Card 
                            icon={<FaHistory size={60}/>}
                            title=" Saldo Anterior"
                            text=" R$ 500,00 "
                            color="dark-green"
                        />
                        <Card 
                            icon={<FaDollarSign size={60}/>}
                            title=" Saldo Atual "
                            text=" R$ 2.000,00"
                            color="light-ciano"
                        />
                    </div>
                </div>
            </div>
            <div className="table-containe">
                <Table />
            </div>
        </div>
    )
}

export default Analise;