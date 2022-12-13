import mysql from "mysql"

const conn = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "crud_product"
})

conn.connect(function (err) {
    if (err) throw new Error("Problema de conexao com bd.")

    console.log("conectado ao bd...")
})

export { conn }





