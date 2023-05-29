<html>
<body>
  EN README https://github.com/Mpiffer/whatsapp-flowise/blob/main/en-README.md
<div><h1>WiseBOT</h1></div>
<div><p>O WiseBOT é um chatbot que utiliza o Flowise para se comunicar e responder perguntas dos usuários.</p></div>
<div><h2>Updates</h2></div>
<div><ul><li>Corrigido o formato dos números na lista branca para incluir o sufixo <code>@c.us</code>. Agora os números devem ser adicionados no formato "<a href="mailto:5511912345678@c.us" target="_new">5511912345678@c.us</a>".</li><li>Adicionada melhoria nos logs para depuração do fluxo de mensagens.</li></ul></div>
<div><h2>Roadmap</h2></div>
<div><h3>Versão 1.0 - DONE</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Integração com o Flowise para processar as perguntas e obter respostas. - DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Funcionalidade de autorização baseada em uma lista branca de números. - DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Responder à mensagem "Hi" com uma saudação amigável. - DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Lidar com perguntas gerais e fornecer respostas relevantes. - DONE</li></ul></div>
<div><h3>Versão 1.1 - DONE</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Adicionar suporte a perguntas mais complexas, com análise de contexto. - DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Implementar recursos de aprendizado para melhorar as respostas ao longo do tempo. - DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked="true"> Integração com APIs externas para obter informações adicionais. - DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Aprimorar a interface de usuário e a experiência do usuário. - DONE</li></ul></div>
<div><h3>Versão 2.0 - WIP</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Integração com plataformas de chat adicionais, como Facebook Messenger, etc. - WIP</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Aumentar a cobertura de idiomas suportados. - DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Adicionar recursos de processamento de linguagem natural avançado. - DONE</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Incorporar aprendizado de máquina para melhorar a compreensão das perguntas. - DONE</li></ul></div>
<div><h3>Versão 3.0</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""> Implementar suporte a chatbots de voz.</li><li class="task-list-item"><input type="checkbox" disabled=""> Criar uma interface de administração para gerenciar o chatbot e visualizar métricas.</li><li class="task-list-item"><input type="checkbox" disabled=""> Implementar recursos de personalização e configuração avançada.</li><li class="task-list-item"><input type="checkbox" disabled=""> Aprimorar a escalabilidade e o desempenho do chatbot.</li></ul></div>
<div><h3>Versão 4.0</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""> Adicionar suporte a chatbots em redes sociais, como Twitter e Instagram.</li><li class="task-list-item"><input type="checkbox" disabled=""> Incorporar análise de sentimento para responder de acordo com o tom emocional do usuário.</li><li class="task-list-item"><input type="checkbox" disabled=""> Desenvolver recursos de processamento de linguagem natural em tempo real.</li><li class="task-list-item"><input type="checkbox" disabled=""> Integração com assistentes virtuais populares, como Siri, Google Assistant, Alexa, etc.</li></ul></div>
<div><h2>Como executar o WiseBOT</h2></div>
<div><ol><li>Clone este repositório.</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-shell">git clone https://github.com/Mpiffer/whatsapp-flowise.git
</code></div></div></pre></div>
<div><ol start="2"><li>Instale as dependências.</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-shell">cd wisebot
npm install
</code></div></div></pre></div>
<div><ol start="3"><li>Configure as informações necessárias.</li></ol></div>
<div><p>Abra o arquivo <code>index.js</code> e insira as credenciais do Flowise e o token de autorização.</p></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><button class="flex ml-auto gap-2"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-javascript">const token = 'pOZiOWTf4aDiBD2PinQyX9nEjXstIPeGecqUx2onR/E='; // Substitua pelo seu token de autorização
  const endpoint = 'http://192.168.15.8:3000/api/v1/prediction/2f3522c3-1e9f-4f2e-a411-f34303e98cd2';
</code></div></div></pre></div>
<div><ol start="4"><li>Execute o WiseBOT.</li></ol></div>
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
