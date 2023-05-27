<html>
<body>
<div><h1>WhatsApp Chatbot with API Integration using Flowise - Documentation</h1></div>
<div><p>This is an example of how to create a WhatsApp chatbot using the <code>@open-wa/wa-automate</code> library and integrate it with an external API using CURL requests, with the assistance of the Flowise library. The chatbot will receive messages from users, send a question to the API, and respond with the obtained answer.</p></div>
<div><h2>Prerequisites</h2></div>
<div><p>Before getting started, make sure you have the following dependencies installed in your development environment:</p></div>
<div><ul><li>Node.js (version 14 or higher)</li><li>npm (Node.js package manager)</li></ul></div>
<div><h2>Installation</h2></div>
<div><p>Follow the steps below to set up the project:</p></div>
<div><ol><li>Clone the WhatsApp chatbot with Flowise integration repository to your development environment:</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><code class="!whitespace-pre hljs language-bash">git <span class="hljs-built_in">clone</span> https://github.com/Mpiffer/whatsapp-flowise.git
</code></div></div></pre></div>
<div><ol start="2"><li>Navigate to the project directory:</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md">
<span class="hljs-built_in">cd</span> whatsapp-flowise
</code></div></div></pre></div>
<div><ol start="3"><li>Install the project dependencies using npm:</li></ol></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><code class="!whitespace-pre hljs language-bash">npm install
</code></div></div></pre></div>
<div><h2>Configuration</h2></div>
<div><p>Before running the chatbot, you need to configure some information:</p></div>
<div><ol><li><p>Open the <code>index.js</code> file in the project's root directory.</p></li><li><p>In the <code>wa.create()</code> code block, adjust the settings according to your preferences. Here are some important options:</p></li></ol></div>
<div><ul><li><code>sessionId</code>: A unique identifier for your WhatsApp session.</li><li><code>multiDevice</code>: Set to <code>true</code> if you want to support multiple devices connected to the same WhatsApp account.</li><li><code>authTimeout</code>: Maximum wait time (in seconds) to connect to the WhatsApp account device.</li><li><code>blockCrashLogs</code>: Define whether crash logs should be blocked or not.</li><li><code>disableSpins</code>: Define whether spins (loading circles) should be disabled or not.</li><li><code>headless</code>: Define whether the browser should run in headless mode (without a graphical interface).</li><li><code>hostNotificationLang</code>: Define the language for host notifications (e.g., 'en' for English).</li><li><code>logConsole</code>: Define whether console logs should be displayed or not.</li><li><code>popup</code>: Define whether pop-ups should be shown during execution.</li><li><code>qrTimeout</code>: Maximum wait time (in seconds) to scan the QR code. Set it to 0 to wait indefinitely.</li></ul></div>
<div><ol start="3"><li><p>In the <code>client.onMessage()</code> code block, you can customize the chatbot's responses based on the received messages. The current example responds with "👋 Hello!" when it receives the message "Hi". You can add additional logic to process different messages and call the API as needed.</p></li><li><p>In the <code>axios.post()</code> code block, adjust the API URL, question, and authorization header. Replace <code>http://192.168.15.8:3000/api/v1/prediction/2f3522c3-1e9f-4f2e-a411-f34303e98cd2</code> with the correct URL of your API. Make sure to provide the question in the proper format for the API.</p></li></ol></div>
<div><h2>Execution</h2></div>
<div><p>After configuring the project, you can run the chatbot with the following command:</p></div>
<div><pre><div class="bg-black rounded-md mb-4"><div class="flex items-center relative text-gray-200 bg-gray-800 px-4 py-2 text-xs font-sans justify-between rounded-t-md"><code class="!whitespace-pre hljs language-bash">node index.js
</code></div></div></pre></div>
<div><p>Make sure to provide your own configurations and adapt the code as needed to meet the specific requirements of your project.</p></div>
</body>
</html>
