
import express from "express";
import { router } from './routes'
import cors from 'cors'

const app = express();

app.use(cors());//liberando acesso para qualquer ip
app.use(express.json())

app.use(router)//rotas separadas




app.listen(3456, () => console.log("Servidor backend rodando..."))

export { router }