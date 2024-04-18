function MyButtonComponent() {
    const [count, setCount] = useState(0) //count = leitura, setCount(nome inventado) = alteração
    const addCount = () => {
        setCount(v => v + 1)
    }

    return (
        <div>
            <button onClick ={addCount}>Clicou {count} vezes</button>
        </div>
    )
}

