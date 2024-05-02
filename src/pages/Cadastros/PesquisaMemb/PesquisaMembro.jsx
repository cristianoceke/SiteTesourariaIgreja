import "./styles.css";

import "./styles.css";

function PesquisaMemb() {
    return (
        <div className="PesquiMemb">
            <h3>Pesquisar</h3>
            <div className="DivPes">
                <div className="DivPesTipo">
                    <div className="PesTipo">
                        <label htmlFor="text"> Tipo de Pessoa </label>
                        <select name="" id="">
                            <option value="1"> Pastor </option>
                            <option value="2"> Presbítero </option>
                            <option value="3"> Diácono </option>
                            <option value="4"> Coordenador </option>
                            <option value="5"> Membro </option>
                        </select>
                    </div>
                </div>
                <div className="DivPesName">
                    <div className="PesName">
                        <label htmlFor="text"> Nome, Código ou E-mail</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className='selectoresfilter'>
                    <div className="seletores">
                        <div className='seletor1'>
                            <input type="radio" id="local" name="localidade" value="Sede" />
                            <label htmlFor="local"> Sede </label>
                        </div>
                        <div className='seletor2'>
                            <input type="radio" id="local" name="localidade" value="congregação" />
                            <label htmlFor="local"> Congregação </label>
                        </div>
                    </div>
                </div>
                <div className="PesButton">
                    <button className="btnPes"> Pesquisar </button>
                </div>

                <div className="PesButton">
                    <button className="btnPes"> + Novo Membro </button>
                </div>
            </div>
            <div className='labelRegis'>
                <div className="LabelRegisResl">
                    <label htmlFor=""> 1 Registros </label>
                </div>
                <div>
                    <table>
                        <thead>
                            <tr>
                                <th>Tipo</th>
                                <th>Código</th>
                                <th>Nome</th>
                                <th>Sobrenome</th>
                                <th>Data de Nascimento</th>
                                <th>Igreja</th>
                                <th>e-mail</th>
                                <th>tele</th>
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
                        <tbody>
                            {/* Aqui você pode preencher a tabela com os dados dinâmicos */}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default PesquisaMemb;