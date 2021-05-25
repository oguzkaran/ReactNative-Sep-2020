import React from 'react';

const App = () => {
  const ws = new WebSocket('wss://echo.websocket.org');

  ws.onopen = () => {
    const message = 'CSD';
    ws.send(message);
  };

  ws.onmessage = e => {
    console.log('Received:', e.data);
  };

  ws.onclose = err => {
    console.log('Error:', err.message);
  };
  ws.onclose = e => {
    console.log('Code:', e.code);
    console.log('Reason:', e.reason);
  };
  return <></>;
};

export default App;
