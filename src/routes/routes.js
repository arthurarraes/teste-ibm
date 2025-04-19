//Importação do express e do controlador
import express from 'express'
import {ConverterTextoParaAudio} from '../controller/controller.js'

const router = express.Router();

//Criação da rota Post com o conversor
router.post('/tts', ConverterTextoParaAudio);

//Exportação da rota
export default router;