export default function Form({name, price, stock, handleName, handlePrice, handleStock, saveForm}) {

    return(

        <>
        <h3>Cadastro de Usuários</h3>
        <form onSubmit={(e) => saveForm(e)}>
        <label htmlFor="nome">Nome:</label>
        <input type="text" name="nome" value={name} onChange={(e) => handleName(e)} />

        <label htmlFor="preco">Preço:</label>
        <input type="text" name="preco" value={price} onChange={(e) => handlePrice(e)} />


        <label htmlFor="estoque">Estoque:</label>
        <input type="text" name="estoque" value={stock} onChange={(e) => handleStock(e)} />

        <input type="submit" value="Cadastrar"/>

        </form>



        
        
        </>
    )
}