import Header from "../../components/Header/Header";
import RelatorioGsaida from "./RelatorioSaidaMes/RelatorioSaidaMes";
import "./styles.css";
import Despesas from "./Despesas/Despesas"

function Saidas() {
    return(
        <div>
            <Header 
                title="Cadastros de" 
                subtitle="Saídas" />
            <div className="section-content">
                <RelatorioGsaida />
            </div>
            <div className="section2-content">
                <Despesas />
            </div>
        </div>
    )
}
export default Saidas;