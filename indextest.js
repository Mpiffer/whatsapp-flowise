const wa = require('@open-wa/wa-automate');
const axios = require('axios');

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

function start(client) {
  client.onMessage(async message => {
    if (message.body === 'Hi') {
      await client.sendText(message.from, '👋 Olá!');
    } else {
      // Enviar a pergunta para o endpoint da API
      const question = message.body;
      const token = 'pOZiOWTf4aDiBD2PinQyX9nEjXstIPeGecqUx2onR/E='; // Substitua pelo seu token de autorização

      try {
        const response = await axios.post('http://192.168.15.8:3000/api/v1/prediction/2f3522c3-1e9f-4f2e-a411-f34303e98cd2', {
          question: question
        }, {
          headers: {
            Authorization: `Bearer ${token}`
          }
        });

        const answer = response.data; // Obter a resposta da API

        await client.sendText(message.from, answer);
      } catch (error) {
        console.error(error);
        await client.sendText(message.from, 'Desculpe, ocorreu um erro ao processar sua pergunta.');
      }
    }
  });
}
