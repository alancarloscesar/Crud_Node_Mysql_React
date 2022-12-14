import React, { useState, useEffect } from "react";
import './index.css'
import axios from 'axios'
import Card from "./Card";

export default function App() {

  const [name, setName] = useState('')
  const [price, setPrice] = useState('')
  const [category, setCategory] = useState('')

  const [products, setProducts] = useState([])


  async function handleAddProduct(e) {
    e.preventDefault();

    try {
      if (name === '' || price === '' || category === '') {
        alert("Preencha todos os campos!")
        return;
      }

      const response = await axios.post('http://localhost:3456/cadastro', {
        name: name,
        price: price,
        category: category
      })

      alert("Produto adiocionado.")
      console.log(response.data)

    } catch (error) {
      console.log("Erro ao cadastrar.", error)
    }
  }

  useEffect(() => {
    async function loadProducts() {
      axios.get("http://localhost:3456/loadProducts")
        .then((response) => {
          console.log(response.data)
          setProducts(response.data)
        })
        .catch((errr) => {
          console.log("Errooooooo" + errr)
        })
    }

    loadProducts();
  }, [])

  return (

    <div>
      <h1>CRUD - Produtos</h1>

      <form onSubmit={handleAddProduct}>

        <input
          placeholder="Nome..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          placeholder="Preço..."
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <input
          placeholder="Categoria..."
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />

        <button type="submit">Cadastrar</button>
      </form>

      {
        products.map((item)=>{
          return(
            <Card products={item} />
          )
        })
      }
    </div>
  )
}