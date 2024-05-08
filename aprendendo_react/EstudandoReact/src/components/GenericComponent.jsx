export default function GenericComponent({children}) {

    return (
        <div>
            <h3>HTML passando pelo componente pai</h3>
            {children}
        </div>
    )

}