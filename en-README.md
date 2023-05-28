<html>
<body>
<div><h1>WiseBOT</h1></div>
<div><p>WiseBOT is a chatbot that utilizes Flowise to communicate and answer user questions.</p></div>
<div><h2>Updates</h2></div>
<div><ul><li>Fixed the format of the numbers in the whitelist to include the <code>@c.us</code> suffix. Numbers should now be added in the format "<a href="mailto:5511993589393@c.us" target="_new">5511993589393@c.us</a>".</li><li>Improved logging for message flow debugging.</li></ul></div>
<div><h2>Roadmap</h2></div>
<div><h3>Version 1.0</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Integration with Flowise to process questions and obtain answers.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Authorization functionality based on a whitelist of numbers.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Respond to the message "Hi" with a friendly greeting.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Handle general questions and provide relevant answers.</li></ul></div>
<div><h3>Version 1.1</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Add support for more complex questions with context analysis.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Implement learning capabilities to improve responses over time.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Integration with external APIs to retrieve additional information.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Enhance user interface and user experience.</li></ul></div>
<div><h3>Version 2.0 - WIP</h3></div> 
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Integration with additional chat platforms, such as WhatsApp, Facebook Messenger, etc.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Increase language support coverage.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Add advanced natural language processing features.</li><li class="task-list-item"><input type="checkbox" disabled="" checked=""> Incorporate machine learning to improve question understanding.</li></ul></div>
<div><h3>Version 3.0</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""> Implement support for voice-enabled chatbots.</li><li class="task-list-item"><input type="checkbox" disabled=""> Create an administration interface to manage the chatbot and view metrics.</li><li class="task-list-item"><input type="checkbox" disabled=""> Implement advanced customization and configuration features.</li><li class="task-list-item"><input type="checkbox" disabled=""> Enhance scalability and performance of the chatbot.</li></ul></div>
<div><h3>Version 4.0</h3></div>
<div><ul class="contains-task-list"><li class="task-list-item"><input type="checkbox" disabled=""> Add support for chatbots on social media platforms like Twitter and Instagram.</li><li class="task-list-item"><input type="checkbox" disabled=""> Incorporate sentiment analysis to respond based on the user's emotional tone.</li><li class="task-list-item"><input type="checkbox" disabled=""> Develop real-time natural language processing capabilities.</li><li class="task-list-item"><input type="checkbox" disabled=""> Integrate with popular virtual assistants like Siri, Google Assistant, Alexa, etc.</li></ul></div>
<div><h2>How to Run WiseBOT</h2></div>
<div><ol><li>Clone this repository.</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-shell">git clone https://github.com/your-username/wisebot.git
</code></div></div></pre></div>
<div><ol start="2"><li>Install the dependencies.</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-shell">cd wisebot
npm install
</code></div></div></pre></div>
<div><ol start="3"><li>Configure the necessary information.</li></ol></div>
<div><p>Open the <code>config.js</code> file and enter your Flowise credentials and authorization token.</p></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><span>javascript</span><button class="flex ml-auto gap-2"><svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>Copy code</button></div><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-javascript"><span class="hljs-variable language_">module</span>.<span class="hljs-property">exports</span> = {
  <span class="hljs-attr">flowiseCredentials</span>: {
    <span class="hljs-comment">// Enter your Flowise credentials here</span>
  },
  <span class="hljs-attr">authToken</span>: <span class="hljs-string">'pOZiOWTf4aDiBD2PinQyX9nEjXstIPeGecqUx2onR/E='</span> <span class="hljs-comment">// Enter your authorization token here</span>
};
</code></div></div></pre></div>
<div><ol start="4"><li>Run WiseBOT.</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="p-4 overflow-y-auto print:overflow-visible"><code class="!whitespace-pre hljs language-shell">node index.js
</code></div></div></pre></div>
<div><p>Make sure to properly configure the credentials and other required parameters before running WiseBOT.</p></div>
<div><h2>Contribution</h2></div>
<div><p>Contributions are welcome! Feel free to submit pull requests with improvements, bug fixes, or new features.</p></div>
<div><p>Before submitting a pull request, make sure the code adheres to the style guidelines and has passed appropriate tests.</p></div>
<div><h2>License</h2></div>
<div><p>This project is licensed under the MIT License. See the <a href="LICENSE" target="_new">LICENSE</a> file for more details.</p></div>
<div><hr></div>

</body>
</html>
