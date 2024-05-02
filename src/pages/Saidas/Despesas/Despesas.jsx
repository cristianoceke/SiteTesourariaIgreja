import "./styles.css"

function CadastroDespesas() {
    return (
        <div className="container">
            <h2>Cadastro de Despesas</h2>
            <form className="CDForm">
                <div className="linha">
                    <label htmlFor="departamento">Departamento:</label>
                    <label htmlFor="verba">Verba:</label>
                    <label htmlFor="data">Data:</label>
                    <label htmlFor="valor">Valor:</label>
                </div>
                <div className="linha">
                    <input type="text" id="departamento" />
                    <input type="text" id="verba" />
                    <input type="date" id="data" />
                    <input type="text" id="valor" />
                </div>
                <div className="linha">
                    <label htmlFor="tipo">Tipo:</label>
                    <label htmlFor="numero">Número:</label>
                    <label htmlFor="empresa">Empresa:</label>
                    <label htmlFor="descricao">Descrição:</label>
                </div>
                <div className="linha">
                    <input type="text" id="tipo" />
                    <input type="text" id="numero" />
                    <input type="text" id="empresa" />
                    <input type="text" id="descricao" />
                </div>
                <div className="linha2">
                    <div className="radio-button-container">
                        <div>
                            <input type="radio" id="semImagem" name="imagem" value="naoPreciso" />
                            <label htmlFor="semImagem"> Não preciso de imagem </label>
                        </div>
                        <button className="btnDes" type="button"> + Lançar Despesa </button>
                    </div>
                </div>
            </form>
            <table className="DesTable">
                <thead>
                    <tr>
                        <th>Departamento</th>
                        <th>Verba</th>
                        <th>Data</th>
                        <th>Valor</th>
                        <th>Tipo</th>
                        <th>Número</th>
                        <th>Empresa</th>
                        <th>Descrição</th>
                        <th>Recibos</th>
                    </tr>
                    <tr>
                        <th>xXx</th>
                        <th>xXx</th>
                        <th>xXx</th>
                        <th>xXx</th>
                        <th>xXx</th>
                        <th>xXx</th>
                        <th>xXx</th>
                        <th>xXx</th>
                        <th><button className='GRecib'>Gerar Recibo</button></th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default CadastroDespesas;


