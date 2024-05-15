export default function ProductForm() {

    return (
<>
<div class="container">
        <h2>Cadastro de Produtos</h2>
        <form action="#" method="post">
            <label for="nome">Nome:</label>
            <input type="text" name="nome" required/>
            <label for="preco">Preço:</label>
            <input type="number" name="preco" required/>
            <label for="estoque">Estoque:</label>
            <input type="number" name="estoque" required/>
            <input type="submit" value="Cadastrar"/>
        </form>
    </div>
</>
        )
}