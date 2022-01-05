import react, { useState } from "react"
import axios from "axios"
import { Redirect } from "react-router-dom"

const NovoProduto = () => {
    const [nome, setNome] = useState([])
    const [quantidade, setQuantidade] = useState(0)
    const [valor, setValor] = useState(0)


    const getChange = evt => {
        console.log(evt.target.value)
        setNome(evt.target.value)
    }

    const getChangeQuantidade = evt => {
        console.log(evt.target.value)
        setQuantidade(evt.target.value)
    }

    const getChangeValor = evt => {
        console.log(evt.target.value)
        setValor(evt.target.value)
    }

    const salvar = () => {
        console.log(nome, quantidade, valor)
        axios.post('http://localhost:3000/compras/nova', {
            nome,
            quantidade,
            valor

        })
    }
    return (
        <div>

            <h3>Requerir Produto:</h3>
            <label htmlFor="produto">Nome do Produto:</label>
            <input type='text' className="form-control" onChange={getChange} id='name' placeholder="Nome do Produto" />

            <label htmlFor="quantidade">Quantidade do Produto:</label>
            <input type='number' className="form-control" onChange={getChangeQuantidade} id='quantidade' placeholder="Quantidade" />

            <label htmlFor="quantidade">Valor do Produto (Uni):</label>
            <input type='number' className="form-control" onChange={getChangeValor} id='valor' placeholder="Valor por Unidade" />

            <br />
            <button className="btn btn-warning" onClick={salvar}>Requerir</button>
            <br />

        </div >
    )
}


export default NovoProduto
