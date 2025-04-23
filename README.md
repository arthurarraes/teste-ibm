# Ibm Innovation Studio - Technical Assessment
 
Este projeto foi desenvolvido como parte do desafio do time Innovation Studio da IBM, com o objetivo de integrar o serviço **Text to Speech** da IBM Cloud e criar um servidor backend que converte texto em áudio.
 
## Sumário
 
- [Resumo do projeto](#resumo-do-projeto)
- [Tecnologias utilizadas](#tecnologias-utilizadas)
- [Como executar o projeto](#como-executar-e-instalar-o-projeto)  
  - [Pré-requisitos](#pré-requisitos)  
  - [Instalação em texto](#instalação-em-texto)  
  - [Instalação em vídeo](#instalação-em-vídeo)  
- [Estrutura de pastas](#estrutura-de-pastas)
---
 
## Resumo do projeto
 
Um projeto backend com Node.js, que recebe uma requisição `POST` na rota `/tts` com o texto que o usuário deseja transformar em áudio.  
O servidor utiliza as credenciais da IBM Cloud para autenticar e acessar o serviço Text to Speech, que converte o texto em áudio no formato `.mp3` e retorna esse arquivo como resposta para o usuário.
 
---
 
## Tecnologias utilizadas
 
- **Node.js**: Plataforma JavaScript para construção do servidor backend.
- **Express**: Framework web para facilitar a criação de APIs em Node.js.
- **IBM Watson Text to Speech**: Serviço da IBM Cloud para converter texto em áudio.
- **dotenv**: Para carregar variáveis de ambiente a partir de um arquivo `.env`.
- **Postman**: Ferramenta para testar APIs.
 
---
 
## Como executar e instalar o projeto
 
### Pré-requisitos
 
- [Node.js](https://nodejs.org/) instalado (versão 14 ou superior)
  - Caso ainda não tenha:
    - [Instalar Node.js](https://nodejs.org/en/download)
- Conta na IBM Cloud com o serviço **Text to Speech** criado  
  - Caso ainda não tenha:
    - [Criar conta na IBM Cloud](https://www.ibm.com/br-pt/cloud/free)
    - [Acessar IBM Text to Speech](https://www.ibm.com/products/text-to-speech)
- Chave de API e URL do serviço disponíveis
 
### Instalação em texto
 
- **Clone o repositório e abra a pasta no editor de código da sua preferência:**
   ```bash
   git clone https://github.com/arthurarraes/teste-ibm
   ```
 
- **No terminal, instale as dependências:**
   ```bash
   npm install
   ```
 
- **Vá até o arquivo `.env` na pasta `src` e edite as linhas:**
   ```env
   IBM_API_KEY=sua_chave_da_ibm
   IBM_URL=sua_url_do_servico
   ```
 
### Instalação em vídeo

https://github.com/user-attachments/assets/05f08354-b23a-42b4-b1f6-2b80b175472a

### Como executar o projeto

Após instalar as dependências e configurar o `.env`, siga os passos abaixo para executar e testar a aplicação:

1. **Execute o servidor:**
    - Caso ainda não esteja na pasta `src`:
      ```bash
      cd src
      node server.js
      ```
    - Caso já esteja na pasta `src`:
      ```bash
      node server.js
      ```

2. **Abra o Postman ou qualquer ferramenta de requisição HTTP e envie um `POST` para a seguinte URL:**

   ```
   http://localhost:3000/tts
   ```

3. **No corpo da requisição, envie um JSON com a chave `text`:**

   ```json
   {
     "text": "texto que você quer transformar em áudio"
   }
   ```

4. **Você receberá como resposta um arquivo de áudio `.mp3`, com a conversão feita pelo serviço da IBM.**

<p align="center">
<img src="https://i.imgur.com/4hqqW8o.png" alt="Requisição no Postman" width="800">
</p>
 
*Exemplo de uso no Postman: a rota `/tts` é chamada com um corpo JSON contendo a chave `text` e o valor desejado. A resposta retorna um arquivo `.mp3` com o áudio gerado.*

---

## Estrutura de pastas
### O projeto foi criado usando a seguinte organização e distribuição de responsabilidades do projeto:
 
- Model - Pasta `services` na qual interage com a API da IBM. <br>
- View - Pasta `routes` onde fica o "ponto de entrada", em que o usuário fará a interação. <br>
- Controller - Pasta `controllers` em que fica a lógica de processamento da requisição.
```bash
.
├── src/                         # Contém o código fonte do servidor
│   ├── controllers/             # Controladores que lidam com a lógica das rotas
│   │   └── controller.js        # Controlador para gerenciar o serviço de Text to Speech
│   ├── routes/                  # Define as rotas do servidor
│   │   └── routes.js            # Arquivo que configura as rotas do servidor
│   ├── services/                # Serviços que interagem com APIs externas
│   │   └── service.js           # Serviço que interage com o serviço IBM Text to Speech
│   ├── server.js                # Arquivo principal que inicia o servidor Node.js
│   ├── .env                     # Arquivo de configuração com as chaves da API e URL do serviço IBM Text to Speech
├── node_modules/                # Dependências do projeto (não versionado no Git)
├── package.json                 # Arquivo de configuração do Node.js e scripts
├── package-lock.json            # Arquivo de bloqueio de dependências
├── .gitattributes               # Arquivo de configuração para git
└── README.md                    # Este arquivo de documentação
```
