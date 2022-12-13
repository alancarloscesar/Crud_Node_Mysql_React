
import { Router } from "express";
import { conn } from "./dbConnection";

const router = Router();

//cadastro de produtos
router.post('/cadastro', (req, res) => {

    const { name, price, category } = req.body

    if (name === '' || price === '' || category === '') {
        return res.json({
            Error: "Prencha todos os campos."
        })
    }

    let sql = `insert into product(name, price, category) values ('${name}',${price},'${category}')`
    conn.query(sql)

    return res.json({
        sucess: "Cadastrado com sucesso."
    })
})

//router para buscar produtos
router.get('/loadProducts', function (req, res) {
    let sql = "SELECT * FROM product"
    conn.query(sql, (err, result) => {
        return res.json(result)
    })
})

//route para deletar um produto por id
router.delete('/product', (req, res) => {
    const { codigo } = req.query

    let sql = `DELETE FROM product where codigo = ${codigo}`

    conn.query(sql, (err, result) => {
        if (err) throw err;

        return res.json({
            message: "Produto deletado com sucesso!" + result
        })
    })
})

//route para deletar um produto por id
router.put('/product', (req, res) => {
    const { codigo } = req.query
    const { name, price, category } = req.body

    let sql = `UPDATE product SET name = '${name}', price = ${price}, category= '${category}' 
                where codigo = ${codigo}`

    conn.query(sql, (err, result) => {
        res.json({
            message: "Produto alterado com sucesso."
        })
    })
})

export { router }