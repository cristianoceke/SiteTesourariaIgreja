import Header from "../../components/Header/Header";
import RelatorioGentrada from "./RelatorioEntradaMes/RelatorioEntradaMes";
import { Routes, Route, NavLink } from 'react-router-dom'; 
import LancamentoDizi from "./LancamentoDIzi/LancamentoDizi";
import LancProjeto from "./LancProjeto/LancProjeto";
import LancOfertDire from "./LancOferDire/LancOfertDire";
import "./styles.css";

function Entradas() {
    return (
        <div>
            <Header 
                title="Cadastros de " 
                subtitle="Entradas" />
            <div className="section-content">
                <RelatorioGentrada />
            </div>
            <div className="Entlinks-container">
                <ul className="Entlinks-list">
                    <li><NavLink to="/entradas" activeClassName="active"> <h4> Lançar Dízimos & Ofertas </h4> </NavLink></li>
                    <li><NavLink to="/entradas/lancOfertDire" activeClassName="active"> <h4> Lançar Ofertas Direcionadas </h4> </NavLink></li>
                    <li><NavLink to="/entradas/lancProjeto" activeClassName="active"> <h4> Lançar Projetos </h4> </NavLink></li>
                </ul>
                <Routes>
                    <Route path="/" element={<LancamentoDizi />} />
                    <Route path="/lancOfertDire" element={<LancOfertDire />} />
                    <Route path="/lancProjeto" element={<LancProjeto />} />
                </Routes>
            </div>
        </div>
    );
}

export default Entradas;
