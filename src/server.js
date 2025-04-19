//Importação do .env, express e rotas
import 'dotenv/config'
import express from 'express'
import routes from './routes/routes.js'

//Criação da rota
const app = express();
app.use(express.json());
app.use('/', routes);

//Criação da porta
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log("Servidor rodando na porta " + PORT);
})