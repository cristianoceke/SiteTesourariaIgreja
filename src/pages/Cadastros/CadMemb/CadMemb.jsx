import "./styles.css"

function CadMemb() {
    return(
        <div className="CadMemb">
            <h3> Cadastrar Novo Membro </h3>
            <div className="Cad-Container">
                <div className="Cad-content">
                    <div className="DivCad">
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
                <div className="Cad-content">
                    <div className="DivCad">
                        <label htmlFor="text"> Nome </label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="Cad-content">
                    <div className="DivCad">
                        <label htmlFor="text"> Sobrenome </label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="Cad-content">
                    <div className="DivCad">
                        <label htmlFor="text"> Data de Nascimento </label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="Cad-content">
                    <div className="DivCad">
                        <label htmlFor="text"> E-mail</label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className="Cad-content">
                    <div className="DivCad">
                        <label htmlFor="text"> Telefone </label>
                        <input type="text" name="" id="" />
                    </div>
                </div>
                <div className='selectoresfilterCad'>
                    <div className="seletoresCad">
                        <div className='seletor1Cad'>
                            <input type="radio" id="local" name="localidade" value="Sede" />
                            <label htmlFor="local"> Sede </label>
                        </div>
                        <div className='seletor2Cad'>
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
                <h3> Membros Cadastrados </h3>
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
                                    <th><button className='GRecib'> Editar Membro </button></th>
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

export default CadMemb;