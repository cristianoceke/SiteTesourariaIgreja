import "./styles.css";

function LancOfertDire(){
    return(
        <div className="LançOferDirContainer">
            <div className="LançOferDirTipo">
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
            <div className="LançOferDirName">
                <div className="LançOferDirName">
                    <label htmlFor="text"> Nome </label>
                    <input className="LançOferInput"  type="text" name="Nome" id="Nome" />
                </div>
            </div>
            <div className="LançOferDirName">
                <div className="LançOferDirName">
                    <label htmlFor="number"> Dízimo </label>
                    <input type="text" name="Dízimo" id="Dízimo" placeholder="R$ 24.000,00"/>
                </div>
            </div>
            <div className="LançOferDirName">
                <div className="LançOferDirName">
                    <label htmlFor="number"> Oferta </label>
                    <input type="number" name="Oferta" id="Oferta" placeholder="R$ 24.000,00"/>
                </div>
            </div>
            <div className='LançOferDirselectoresfilter'>
                    <div className="LançOferDirseletores">
                        <div className='LançOferDirseletor1'>
                            <input type="radio" id="Sede" name="localidade" value="Sede" />
                            <label htmlFor="local"> Sede </label>
                        </div>
                        <div className='LançOferDirseletor2'>
                            <input type="radio" id="Congregação" name="localidade" value="congregação" />
                            <label htmlFor="local"> Congregação </label>
                        </div>
                    </div>
                </div>
                <div className="LançOferDirButton">
                    <button className="btnPes"> LANÇAR </button>
                </div>
        </div>
    )
}
export default LancOfertDire;