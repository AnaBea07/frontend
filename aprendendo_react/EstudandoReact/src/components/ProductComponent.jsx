function ProductComponent(props) {

    return(
        <div>
            <p>Produto: {props.name} - Descrição: {props.category} </p>
        </div>
    )

}

export default ProductComponent

//function ProductComponent({name, category}) {

// return(
//     <div>
//         <p>Produto: {name} - Descrição: {category} </p>
//     </div>
// )

// }