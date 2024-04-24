import "./styles.css";

function LancamentoDizi() {
    return(
        <div className="LançDiziContainer">
            <div className="LançDiziTipo">
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
            <div className="LançDiziDivName">
                <div className="LançDiziName">
                    <label htmlFor="text"> Nome </label>
                    <input className="LançInput"  type="text" name="" id="" />
                </div>
            </div>
            <div className="LançDiziDivName">
                <div className="LançDiziName">
                    <label htmlFor="number"> Dízimo </label>
                    <input type="text" name="" id="" placeholder="R$ 24.000,00"/>
                </div>
            </div>
            <div className="LançDiziDivName">
                <div className="LançDiziName">
                    <label htmlFor="number"> Oferta </label>
                    <input type="number" name="" id="" placeholder="R$ 24.000,00"/>
                </div>
            </div>
            <div className='LançDiziselectoresfilter'>
                    <div className="LançDiziseletores">
                        <div className='LançDiziseletor1'>
                            <input type="radio" id="" name="localidade" value="Sede" />
                            <label htmlFor="local"> Sede </label>
                        </div>
                        <div className='LançDiziseletor2'>
                            <input type="radio" id="" name="localidade" value="congregação" />
                            <label htmlFor="local"> Congregação </label>
                        </div>
                    </div>
                </div>
                <div className="LançDiziButton">
                    <button className="btnPes"> Lançar </button>
                </div>
        </div>
    )
}
export default LancamentoDizi;