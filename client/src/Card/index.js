import React from "react";
import './styles.css'
import axios from "axios";

export default function Card({ products }) {

    async function handleDelete() {
        try {
            const response = await axios.delete('http://localhost:3456/product?codigo=12')

            alert("Produto Deletado.")
            console.log(response.data)

        } catch (error) {
            console.log("Erro ao cadastrar.", error)
        }
    }

    return (
        <div className="container">
            <section>
                <h1>{products.name}</h1>
                <h3>{products.category}</h3>
                <h5>{products.price} - R$</h5>

                <div className="btn-group">
                    <button className="btn-editar">Editar</button>
                    <button className="btn-deletar" onClick={() => handleDelete}>Deletar</button>
                </div>
            </section>
        </div>
    )
}