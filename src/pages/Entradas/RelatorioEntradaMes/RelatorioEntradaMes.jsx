import "./styles.css";
import { FaMoneyCheckAlt, FaHistory, FaChartPie, FaDollarSign } from 'react-icons/fa';
import Card from '../../../components/CardIcon/Card';

function RelatorioGentrada() {
    return (
        <div className='GE-containe'>
            <h2> Relatório Entradas Mensais</h2>
            <div className='GE-content'>
                <div className='GEfilterEntr'>
                    <div className='GEfilterTitle'>
                    <span> Período </span>
                    <h2>Selecione o mês e ano </h2>
                    </div>
                    <div className='GEselectfilter'>
                        <div className='GEselectFilterMes'>
                            <select className="GEclasSelMes" id="meses" name="meses">
                                <option value="1">Janeiro</option>
                                <option value="2">Fevereiro</option>
                                <option value="3">Março</option>
                                <option value="4">Abril</option>
                                <option value="5">Maio</option>
                                <option value="6">Junho</option>
                                <option value="7">Julho</option>
                                <option value="8">Agosto</option>
                                <option value="9">Setembro</option>
                                <option value="10">Outubro</option>
                                <option value="11">Novembro</option>
                                <option value="12">Dezembro</option>
                            </select>
                        </div>
                        <div className='GEselectFilterAno'>
                            <select className="GEclasSelAno" id="ano" name="ano">
                                <option value="1">2020</option>
                                <option value="2">2021</option>
                                <option value="3">2022</option>
                                <option value="4">2023</option>
                                <option value="5">2024</option>
                                <option value="6">2025</option>
                                <option value="7">2026</option>
                                <option value="8">2027</option>
                                <option value="9">2028</option>
                                <option value="10">2029</option>
                                <option value="11">2030</option>
                                <option value="12">2031</option>
                            </select>
                        </div>
                    </div>
                    <div className='GEbtntitulo'>
                        <button className='GEbtnAtualiza'> PESQUISAR </button>
                    </div>
                </div>
                    <div className="GESection-Card-Entr"> 
                        <Card 
                            icon={<FaMoneyCheckAlt size={60}/>}
                            title="Entradas de Dízimos & Ofertas"
                            text=" R$ 50.000,00 "
                            color="dark-ciano"
                        />
                        <Card 
                            icon={<FaChartPie size={60}/>}
                            title=" Entradas Projetos "
                            text=" R$ 45.000,00 "
                            color="light-yellow"
                        />
                        <Card 
                            icon={<FaHistory size={60}/>}
                            title=" Entrada Avulsa "
                            text=" R$ 500,00 "
                            color="dark-green"
                        />
                        <Card 
                            icon={<FaDollarSign size={60}/>}
                            title=" Entrada Total "
                            text=" R$ 2.000,00"
                            color="light-ciano"
                        />
                    </div> 
            </div>    
        </div>
    )
}

export default RelatorioGentrada;