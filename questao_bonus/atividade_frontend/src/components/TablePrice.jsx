export default function TablePrice(props) {

    return (

        <table>
            <thead>
                <tr className="linha-verde">
                    <th>ID</th>
                    <th>Nome</th>
                    <th>Preço</th>
                    <th>Estoque (kg)</th>
                    <th>Ações</th>
                </tr>
            </thead>

            <tbody>
            {props.products.map(product => (
                <tr key={product.id}>
                    <td className="branco">{product.id}</td>
                    <td className="branco">{product.name}</td>
                    <td className="branco">R${product.price}</td>
                    <td className="branco">{product.weight}</td>
                    <td className="branco">
                        <button className="cinza editar">Editar</button>
                        <button className="cinza excluir">Excluir</button>
                    </td>
                </tr>
                 ))}
            </tbody>
        </table>
    )
}
