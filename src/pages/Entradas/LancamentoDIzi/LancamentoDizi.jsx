import "./styles.css";

function LancamentoDizi() {
    return(
        <div className="LançDiziContainer">
            <div className="LançDiziTipo">
            <label htmlFor="text"> Malote </label>
                <select name="" id="">
                    <option value="1"> 1º Malote </option>
                    <option value="2"> 2º Malote </option>
                    <option value="3"> 3º Malote </option>
                    <option value="4"> 4º Malote </option>
                    <option value="5"> Congreção </option>
                </select>
            </div>
            <div className="LançDiziTipo">
                <label htmlFor="text"> Tipo de Pessoa </label>
                <select name="" id="">
                    <option value="1"> Pastor </option>
                    <option value="2"> Presbítero </option>
                    <option value="3"> Diácono </option>
                    <option value="4"> Coordenador </option>
                    <option value="5"> Membro </option>
                    <option value="6"> Avulso </option>
                </select>
            </div>
            <div className="LançDiziDivName">
                <div className="LançDiziName">
                    <label htmlFor="text"> Apelido </label>
                    <input className="LançInput"  type="text" name="Nome" id="Nome" />
                </div>
            </div>
            <div className="LançDiziDivName">
                <div className="LançDiziName">
                    <label htmlFor="text"> Nome </label>
                    <input className="LançInput"  type="text" name="Nome" id="Nome" />
                </div>
            </div>
            <div className="LançDiziDivName">
                <div className="LançDiziName">
                    <label htmlFor="number"> Dízimo </label>
                    <input type="text" name="Dízimo" id="Dízimo" placeholder="R$ 24.000,00"/>
                </div>
            </div>
            <div className="LançDiziDivName">
                <div className="LançDiziName">
                    <label htmlFor="number"> Oferta </label>
                    <input type="number" name="Oferta" id="Oferta" placeholder="R$ 24.000,00"/>
                </div>
            </div>
            <div className='LançDiziselectoresfilter'>
                    <div className="LançDiziseletores">
                        <div className='LançDiziseletor1'>
                            <input type="radio" id="Sede" name="localidade" value="Sede" />
                            <label htmlFor="local"> Sede </label>
                        </div>
                        <div className='LançDiziseletor2'>
                            <input type="radio" id="Congregação" name="localidade" value="congregação" />
                            <label htmlFor="local"> Congregação </label>
                        </div>
                    </div>
                </div>
                <div className="LançDiziButton">
                    <button className="btnPes"> LANÇAR </button>
                </div>
        </div>
    )
}
export default LancamentoDizi;