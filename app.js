const form = document.getElementById('textForm');
form.addEventListener('submit', (e) => {
    e.preventDefault();
    const userText = document.getElementById('userText').value;

    // Open WebSocket connection to the server
    const socket = new WebSocket('ws://localhost:8080');

    socket.onopen = () => {
        socket.send(userText);
    };

    socket.onclose = () => {
        console.log('Connection closed');
    };
});
