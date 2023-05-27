const wa = require('@open-wa/wa-automate');
const fetch = require('node-fetch');

wa.create({
  sessionId: "COVID_HELPER",
  multiDevice: true,
  authTimeout: 60,
  blockCrashLogs: true,
  disableSpins: true,
  headless: true,
  hostNotificationLang: 'PT_BR',
  logConsole: false,
  popup: true,
  qrTimeout: 0,
}).then(client => start(client));

async function queryFlowise(data) {
  try {
    const response = await fetch(
      "http://localhost:3000/api/v1/prediction/2f3522c3-1e9f-4f2e-a411-f34303e98cd2",
      {
        headers: { Authorization: "Bearer kXdC9cC0Cm4iHbmzAtxVdZc+YkhFFH3Afd56xFj6lok=" },
        method: "POST",
        body: JSON.stringify(data)
      }
    );

    if (!response.ok) {
      throw new Error(`Erro ao consultar o Flowise: ${response.status} ${response.statusText}`);
    }

    const result = await response.json();
    return result;
  } catch (error) {
    console.error("Erro ao fazer a consulta ao Flowise:", error);
    throw error;
  }
}

async function start(client) {
  client.onMessage(async message => {
    try {
      const userMessage = message.body.toLowerCase();

      if (userMessage === 'oi') {
        await client.sendText(message.from, '👋 Olá!');
      } else {
        const queryData = { question: userMessage };
        const flowiseResponse = await queryFlowise(queryData);

        const answer = flowiseResponse?.answer || 'Desculpe, não tenho uma resposta para isso no momento.';
        await client.sendText(message.from, answer);
      }
    } catch (error) {
      console.error("Erro ao processar a mensagem:", error);
    }
  });
}

// Exemplo de uso da função query
queryFlowise({ question: "Hey, how are you?" })
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error("Erro ao fazer a consulta ao Flowise:", error);
  });
