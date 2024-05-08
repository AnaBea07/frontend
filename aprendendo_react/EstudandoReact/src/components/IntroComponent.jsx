import ChildComponent from "./ChildComponent";

function IntroComponent() {

    const a = 12, b = 6, nome = 'Ana Beatriz';
    const aluno = {
        nome: 'Helena',
        email: 'helena123@email.com'
    }
    return (
        <div>
            <h2>Introdução de componentes</h2>
            <h3>Template Expressions</h3>
            <p> {nome}, o produto entre {a} e {b} é {a*b} </p>
            <hr></hr>
            <p>Aluno {aluno.nome} <br/> Email: {aluno.email}</p>
            <ChildComponent />
        </div>
    )
}

export default IntroComponent