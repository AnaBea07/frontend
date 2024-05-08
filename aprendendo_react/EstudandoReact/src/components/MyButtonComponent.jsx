import { useState } from "react";

function MyButtonComponent() {

    const [counter, setCounter]  = useState(0) 
    //count = leitura, setCount(nome inventado) = alteração

    const addCounterOnClick = () => setCounter(counter + 1);

    return (
        <button onClick={addCounterOnClick}>
            Clicou {counter} vezes!!
        </button>
    )

}

export default MyButtonComponent