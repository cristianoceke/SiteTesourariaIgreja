import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css"; // Importando estilos
import Sidebar from './Sidebar/Sidebar';
import Footer from './Footer/Footer';
import Home from '../pages/Home/Home'
import Analise from '../pages/Analise/Analise';
import Cadastros from '../pages/Cadastros/Cadastros';
import Entradas from '../pages/Entradas/Entradas';
import Saidas from '../pages/Saidas/Saidas';
import Pagamentos from '../pages/Pagamentos/Pagamentos';
import Sair from '../pages/Sair/Sair';


function App() {
    return (
        <Router>
            <div className="app">
                <Sidebar />
                <div className="main">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/analise" element={<Analise />} />
                        <Route path="/cadastros" element={<Cadastros />} />
                        <Route path="/entradas/*" element={<Entradas />} /> {/* Use * para renderizar qualquer rota dentro de Entradas */}
                        <Route path="/saidas" element={<Saidas />} />
                        <Route path="/pagamentos" element={<Pagamentos />} />
                        <Route path="/sair" element={<Sair />} />
                    </Routes>
                    <Footer />
                </div>
            </div>
        </Router>
    );
}

export default App;
