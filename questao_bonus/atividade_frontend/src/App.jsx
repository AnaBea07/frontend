import TablePrice from './components/TablePrice'


import './App.css'
import { useEffect, useState } from 'react'

import Form from './components/Form'

function App() {

  const [products, setProducts] = useState([])
  const [id, setId] = useState(1)
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [edit, setEdit] = useState(false)


  const url = 'http://localhost:3000/products'

  const clearForm = () => {
    setName("")
    setPrice("")
    setStock("")
  }

 useEffect (() => {
  const getProductList = async() => {
  const res = await fetch(url);
  const data = await res.json();
  setProducts(data);
  }

  getProductList();
 
}, [])

  const getProductById = async(id) => {

    const res = await fetch(url + `/${id}`);
    const data = await res.json();

    setName(data.name)
    setPrice(data.price);
    setStock(data.stock);
    setId(data.id);

    setEdit(true);

  }


  const saveProduct = async(e) => {
    e.preventDefault();

    const saveRequestParams = {
      method: edit ? "PUT" : "POST",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({name, price, stock})
    }

    const save_url = edit ? url + `/${id}` : url;

    const res = await fetch(save_url, saveRequestParams);

    if (!edit) {
      const newProduct = await res.json();
      setProducts((prevProducts) => [...prevProducts, newProduct])
    }

    if (edit) {
      const editedProduct = await res.json();
      const editedProductIndex = products.findIndex(prod => prod.id === id);
      products[editedProductIndex] = editedProduct;
      setProducts(products)
      
    }
    clearForm();
    setEdit(false);
}

const deleteProduct = async(id) => {
  
  const res = await fetch(url + `/${id}` ,{
    method: "DELETE",
    headers: {
      "content-type": "application/json"
    }
  }
  
  );
  
  
  const deletedProduct = await res.json();
  setProducts(products.filter((prod => prod.id !== deletedProduct.id)))
}

// const editProduct = (id) => {
//   const product = products.find(prod => prod.id === id)
//   setId(product.id)
//   setName(product.name)
//   setPrice(product.price)
//   setStock(product.stock)
//   setEdit(true)
// }

const handleName = (e) => {setName(e.target.value)}
const handlePrice = (e) => {setPrice(e.target.value)}
const handleStock = (e) => {setStock(e.target.value)}

  return (
    <>
     <TablePrice products={products} editProduct={getProductById} deleteProduct={deleteProduct}/>
    <Form name={name} price={price} stock={stock }handleName={handleName} 
    handlePrice={handlePrice} handleStock={handleStock} saveForm={saveProduct}/>

    
      
    </>
  )
}

export default App

