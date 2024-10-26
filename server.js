const WebSocket = require('ws');
const wss = new WebSocket.Server({ port: 8080 });

wss.on('connection', (ws) => {
    ws.on('message', (message) => {
        console.log(`Received message: ${message}`);
        // Add code here to send this message to Unreal Engine
    });
});

console.log(`WebSocket server is running on 8080`);
