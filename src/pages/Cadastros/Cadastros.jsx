import Header from "../../components/Header/Header";
import PesquisaMemb from "./PesquisaMemb/PesquisaMembro";


    function Cadastros() {
    return (
        <div>
            <Header 
                title="Cadastro de " 
                subtitle="Membros" />
            <div>
                <PesquisaMemb />
            </div>
        </div>
    );
    }

    export default Cadastros;
