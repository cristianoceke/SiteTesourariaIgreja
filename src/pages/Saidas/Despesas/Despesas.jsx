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
                    <select name="" id="departamento">
                        <option value=""> Pastoral </option>
                        <option value=""> Presbitéros </option>
                        <option value=""> Diáconia </option>
                        <option value=""> Senhores </option>
                        <option value=""> Senhoras </option>
                        <option value=""> Infantil </option>
                        <option value=""> Ministério de Louvor </option>
                        <option value=""> FJM </option>
                        <option value=""> STAFF </option>
                    </select>
                    <select name="" id="verba">
                        <option value=""> Próprio </option>
                        <option value=""> Projetos </option>
                        <option value=""> Oferta Direcionada </option>
                    </select>
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
                <select name="" id="tipo">
                        <option value=""> NF </option>
                        <option value=""> Cartão Crédito </option>
                        <option value=""> Pix </option>
                        <option value=""> Dinheiro </option>
                        <option value=""> Transferências </option>
                        <option value=""> Empréstimo </option>
                        <option value=""> Reposição </option>
                        <option value=""> Contas Fixas </option>
                        <option value=""> Boletos </option>
                    </select>
                    <input type="text" id="numero" />
                    <input type="text" id="empresa" />
                    <input type="text" id="descricao" />
                </div>
                <div className="linha2">
                    <div className="radio-button-container">
                        <div>
                            <input type="radio" id="semImagem" name="imagem" value="naoPreciso" />
                            <label htmlFor="semImagem"> Pagamento CPF </label>
                        </div>
                        <div>
                            <input type="radio" id="semImagem" name="imagem" value="naoPreciso" />
                            <label htmlFor="semImagem"> Pagamento CNPJ </label>
                        </div>
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
                        <th>
                            <button className='GEditar'> - Editar </button>
                            <button className='GEnviar'> + Enviar </button>
                            <button className='GRecib'> Gerar Recibo </button>
                        </th>
                    </tr>
                </thead>
            </table>
        </div>
    );
}

export default CadastroDespesas;


