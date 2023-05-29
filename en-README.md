<html>
<body>
<div><h1>WiseBOT</h1></div>
<div><p>WiseBOT is a chatbot that utilizes Flowise to communicate and answer user questions.</p></div>
<div><h2>Updates</h2></div>
<div><ul><li>Fixed the format of the numbers in the whitelist to include the <code>@c.us</code> suffix. Numbers should now be added in the format "<a href="mailto:5511993589393@c.us" target="_new">5511993589393@c.us</a>".</li><li>Improved logging for message flow debugging.</li></ul></div>
<div><h2>Roadmap</h2></div>
<div><h3>Version 1.0</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Integration with Flowise to process questions and obtain answers.- DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Authorization functionality based on a whitelist of numbers.- DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Respond to the message "Hi" with a friendly greeting.- DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Handle general questions and provide relevant answers.- DONE</li></ul></div>
<div><h3>Version 1.1</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Add support for more complex questions with context analysis.- DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Implement learning capabilities to improve responses over time.- DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Integration with external APIs to retrieve additional information.- DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Enhance user interface and user experience.- DONE</li></ul></div>
<div><h3>Version 2.0 - WIP</h3></div> 
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Integration with additional chat platforms, such as Facebook Messenger, etc. - WIP</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Increase language support coverage.- DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Add advanced natural language processing features.- DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Incorporate machine learning to improve question understanding.- DONE</li></ul></div>
<div><h3>Version 3.0</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""> Implement support for voice-enabled chatbots.</li><li class="task-list-item"><input type="checkbox" disabled=""> Create an administration interface to manage the chatbot and view metrics.</li><li class="task-list-item"><input type="checkbox" disabled=""> Implement advanced customization and configuration features.</li><li class="task-list-item"><input type="checkbox" disabled=""> Enhance scalability and performance of the chatbot.</li></ul></div>
<div><h3>Version 4.0</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""> Add support for chatbots on social media platforms like Twitter and Instagram.</li><li class="task-list-item"><input type="checkbox" disabled=""> Incorporate sentiment analysis to respond based on the user's emotional tone.</li><li class="task-list-item"><input type="checkbox" disabled=""> Develop real-time natural language processing capabilities.</li><li class="task-list-item"><input type="checkbox" disabled=""> Integrate with popular virtual assistants like Siri, Google Assistant, Alexa, etc.</li></ul></div>
<div><h2>How to run the WiseBOT</h2></div>
<div><ol><li>Clone este repositório.</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-shell">git clone https://github.com/Mpiffer/whatsapp-flowise.git
</code></div></div></pre></div>
<div><ol start="2"><li>Instale as dependências.</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-shell">cd wisebot
npm install
</code></div></div></pre></div>
<div><ol start="3"><li>Configure.</li></ol></div>
<div><p>Abra o arquivo <code>index.js</code> e insira as credenciais do Flowise e o token de autorização.</p></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><button class="flex ml-auto gap-2"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-javascript">const token = 'pOZiOWTf4aDiBD2PinQyX9nEjXstIPeGecqUx2onR/E='; // Substitua pelo seu token de autorização
  const endpoint = 'http://192.168.15.8:3000/api/v1/prediction/2f3522c3-1e9f-4f2e-a411-f34303e98cd2';
</code></div></div></pre></div>
<div><ol start="4"><li>Run the WiseBOT.</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-shell">node index.js
</code></div></div></pre></div>
<div><p>Certifique-se de configurar corretamente as credenciais e outros parâmetros necessários antes de executar o WiseBOT.</p></div>
<div><h2>Contribuição</h2></div>
<div><p>Contribuições são bem-vindas! Sinta-se à vontade para enviar pull requests com melhorias, correções de bugs ou novos recursos.</p></div>
<div><p>Antes de enviar uma solicitação de pull, verifique se o código está de acordo com as diretrizes de estilo e passe por testes adequados.</p></div>
<div><h2>Licença</h2></div>
<div><p>Este projeto está licenciado sob a licença MIT. Leia o arquivo <a href="LICENSE" target="_new">LICENSE</a> para obter mais detalhes.</p></div>
<div><hr></div>

</body>
</html>
