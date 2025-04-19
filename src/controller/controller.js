//Importação do serviço
import textToSpeech from '../services/ibmService.js'

export async function ConverterTextoParaAudio(req, res) {
  const { text } = req.body;

  //Verificação do que foi enviado na requisição
  if (!text) {
    return res.status(400).json({ error: 'Texto é obrigatório.' });
  }
  
  //Escolha da voz e como será passado
  const synthesizeParams = {
    text,
    accept: 'audio/mp3',
    voice: 'pt-BR_IsabelaV3Voice'
  };


  try {
    //Tentativa de transformar em áudio
    const response = await textToSpeech.synthesize(synthesizeParams);
    const audio = await textToSpeech.repairWavHeaderStream(response.result);

    //Setando como ele voltará
    res.set({
      'Content-Type': 'audio/mp3',
      'Content-Disposition': 'attachment; filename=audio.mp3'
    });
    //Retornando o áudio
    res.send(audio);
    
  } catch (error) {
    //Caso haja algum erro
    res.status(500).json({ error: error.message });
  }
}