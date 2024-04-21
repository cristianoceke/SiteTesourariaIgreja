import Header from "../../components/Header/Header";
import RelatorioGentrada from "./RelatorioEntradaMes/RelatorioEntradaMes";
import { Routes, Route, NavLink, Outlet } from 'react-router-dom'; // Adicionei o Outlet para renderizar os componentes filhos
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
            <div className="links-container">
                <ul className="links-list">
                    <li><NavLink to="/entradas/lancamentoDizi" activeClassName="active"> <h4> Lançar Dízimos & Ofertas </h4> </NavLink></li>
                    <li><NavLink to="/entradas/lancOfertDire" activeClassName="active"> <h4> Lançar Ofertas Direcionadas </h4> </NavLink></li>
                    <li><NavLink to="/entradas/lancProjeto" activeClassName="active"> <h4> Lançar Projetos </h4> </NavLink></li>
                </ul>
                <Routes>
                    <Route path="/" element={<Outlet />} />
                    <Route path="/lancamentoDizi" element={<LancamentoDizi />} />
                    <Route path="/lancOfertDire" element={<LancOfertDire />} />
                    <Route path="/lancProjeto" element={<LancProjeto />} />
                </Routes>
            </div>
        </div>
    );
}

export default Entradas;
