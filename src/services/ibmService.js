//Importação do tts e do autenticador
import TextToSpeechV1 from 'ibm-watson/text-to-speech/v1.js';
import { IamAuthenticator } from 'ibm-watson/auth/index.js';

//Dados de autenticação apiKey e serviceUrl do TTS
const textToSpeech = new TextToSpeechV1({
    authenticator: new IamAuthenticator({
      apikey: process.env.IBM_API_KEY,
    }),
    serviceUrl: process.env.IBM_URL,
  });

//Exportação do TTS
export default textToSpeech