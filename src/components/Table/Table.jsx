import "./styles.css"

function Table() {
    return (
        <div>
            <div className='table-titulo'>
                <h3>Gráfico Mensal</h3>
            </div>
            <table>
            <tfoot>
                <tr>
                    <th>Meses</th>
                    <th>Janeiro</th>
                    <th>Fevereiro</th>
                    <th>Março</th>
                    <th>Abril</th>
                    <th>Maio</th>
                    <th>Junho</th>
                    <th>Julho</th>
                    <th>Agosto</th>
                    <th>Setembro</th>
                    <th>Outubro</th>
                    <th>Novembro</th>
                    <th>Dezembro</th>
                </tr>
            </tfoot>
            <tbody>
                <tr>
                    <td>Entradas</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                    <td>R$200,00</td>
                </tr>
                <tr>
                    <td>Saídas</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                    <td>R$100,00</td>
                </tr>
            </tbody>
        </table>
        </div>
    );
}

export default Table;