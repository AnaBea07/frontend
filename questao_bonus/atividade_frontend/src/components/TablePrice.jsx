

export default function TablePrice({products, editProduct, deleteProduct}) {

   

    return (
        <>
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
            {products.map(product => (
                <tr key={product.id}>
                    <td className="branco">{product.id}</td>
                    <td className="branco">{product.name}</td>
                    <td className="branco">R${product.price}</td>
                    <td className="branco">{product.stock}</td>
                    <td className="branco">
                        <button onClick={()=> editProduct(product.id)} className="cinza editar">Editar</button>
                        <button onClick={() => deleteProduct(product.id)} className="cinza excluir">Excluir</button>
                    </td>
                </tr>
                 ))}
            </tbody>
        </table>

        
        </>


    )
}
