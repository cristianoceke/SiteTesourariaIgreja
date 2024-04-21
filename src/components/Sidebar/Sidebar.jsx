import { Link } from 'react-router-dom';
import "./styles.css";
import { FaChartLine, FaUserPlus, FaMoneyCheckAlt, FaMinusCircle, FaSignOutAlt,FaMoneyBillWave } from 'react-icons/fa';

function Sidebar() {
    return (
        <div className="sidebar">
            <div className='logo'>
            <img src="src/assets/Ministerio-de-Familia-e-Logo-Igreja.png" alt="" />
            </div>
            <ul className='sidebarUl'>
                <li><Link to="/analise"><FaChartLine /> Análise</Link></li>
                <li><Link to="/cadastros"><FaUserPlus /> Cadastro</Link></li>
                <li><Link to="/entradas"><FaMoneyCheckAlt /> Entradas</Link></li>
                <li><Link to="/saidas"><FaMinusCircle /> Saídas</Link></li>
                <li><Link to="/pagamentos"><FaMoneyBillWave /> Pagamentos</Link></li> 
                <li className='logout'><Link to="/sair"><FaSignOutAlt /> Sair</Link></li>
            </ul>
        </div>
    );
}

export default Sidebar;