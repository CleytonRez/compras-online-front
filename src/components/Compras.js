import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';

const Compras = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        axios
            .get('http://localhost:3000/compras')
            .then(response => {
                setData(response.data.response)
                console.log("Response", response.data)
            })
    }, [])

    const deleteCompra = (id) => {
        axios
            .delete('http://localhost:3000/compras/' + id)
            .then((response) => {
                const filtrado = data.filter(item => item.id !== id)
                console.log(filtrado)
                setData(filtrado)
            })
            .catch((error) => {
                console.log(error.message)
            })
    }

    const renderizaProdutos = (dados) => {
        console.log("DADOS:", dados)

        return (
            <tr key={dados.id}>
                <th scope="row">{dados.id}</th>
                <td>{dados.nome}</td>
                <td>{dados.quantidade}</td>
                <td>{dados.valor}</td>
                <td>
                    <button className='btn btn-warning' onClick={() => deleteCompra(dados.id)}>X</button>
                </td>
            </tr>
        )
    }

    return (
        <div>
            <h3>Carrinho:</h3>
            <table className="table table-striped">
                <thead>
                    <tr className='bg-danger'>
                        <th scope="col">ID</th>
                        <th scope="col">Nome</th>
                        <th scope="col">Quantidade</th>
                        <th scope="col">Valor (Uni)</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(renderizaProdutos)}
                </tbody>
            </table>

        </div>
    )
}

export default Compras