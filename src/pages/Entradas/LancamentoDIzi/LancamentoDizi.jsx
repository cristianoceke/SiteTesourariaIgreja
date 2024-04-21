import "./styles.css";

function LancamentoDizi() {
    return(
        <div>
            <div className="LançTipo">
                <label htmlFor="text"> Tipo de Pessoa </label>
                <select name="" id="">
                    <option value="1"> Pastor </option>
                    <option value="2"> Presbítero </option>
                    <option value="3"> Diácono </option>
                    <option value="4"> Coordenador </option>
                    <option value="5"> Membro </option>
                    <option value="5"> Avulso </option>
                </select>
            </div>
            <div className="DivLançName">
                <div className="LançName">
                    <label htmlFor="text"> Nome, Código ou E-mail</label>
                    <input type="text" name="" id="" />
                </div>
            </div>
            <div className="DivLançName">
                <div className="LançName">
                    <label htmlFor="number"> Dízimo</label>
                    <input type="number" name="" id="" />
                </div>
            </div>
            <div className="DivLançName">
                <div className="LançName">
                    <label htmlFor="number"> Oferta </label>
                    <input type="number" name="" id="" />
                </div>
            </div>
            <div className='Lançselectoresfilter'>
                    <div className="Lançseletores">
                        <div className='Lançseletor1'>
                            <input type="radio" id="" name="localidade" value="Sede" />
                            <label htmlFor="local"> Sede </label>
                        </div>
                        <div className='Lançseletor2'>
                            <input type="radio" id="" name="localidade" value="congregação" />
                            <label htmlFor="local"> Congregação </label>
                        </div>
                    </div>
                </div>
                <div className="LançButton">
                    <button className="btnPes"> Lançar </button>
                </div>
        </div>
    )
}
export default LancamentoDizi;