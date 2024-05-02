import Header from "../../components/Header/Header";
import PesquisaMemb from "./PesquisaMemb/PesquisaMembro";
import CadMemb from "./CadMemb/CadMemb";
import { Routes, Route, NavLink } from 'react-router-dom'; 


    function Cadastros() {
    return (
        <div>
            <Header 
                title="Cadastro de " 
                subtitle="Membros" />
                <div className="Entlinks-container">
                    <ul className="Entlinks-list">
                        <li><NavLink to="/cadastros" activeClassName="active"> <h4> Pesquisar Membro </h4> </NavLink></li>
                        <li><NavLink to="/cadastros/CadMemb" activeClassName="active"> <h4> + Novo Membro </h4> </NavLink></li>
                    </ul>
                    <Routes>
                        <Route path="/" element={<PesquisaMemb />} />
                        <Route path="/CadMemb" element={<CadMemb />} />
                    </Routes>
                </div>
        </div>
    );
    }

    export default Cadastros;
