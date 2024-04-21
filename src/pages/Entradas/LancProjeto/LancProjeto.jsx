import "./styles.css"

function LancProjeto() {
    return (
        <div>
            <div className="formGeral">
            <form>
                <div className="form-group">
                    <div className="divLab">
                        <label htmlFor="tipoArrecadacao">Arrecadação:</label>
                        <label htmlFor="nome">Nome:</label>
                        <label htmlFor="data">Data:</label>
                        <label htmlFor="valor">Valor:</label>
                    </div>
                    <div className="divInput">
                        <input
                            type="text"
                            id="tipoArrecadacao"
                            name="tipoArrecadacao"
                            required
                        />
                        <input
                            type="text"
                            id="nome"
                            name="nome"
                            required
                        />
                        <input
                            type="date"
                            id="data"
                            name="data"
                            required
                        />
                        <input
                            type="number"
                            id="valor"
                            name="valor"
                            required
                        />
                        <button type="submit">LANÇAR</button>
                    </div>
                </div>
            </form>
            </div>
        </div>
    );
}

export default LancProjeto;