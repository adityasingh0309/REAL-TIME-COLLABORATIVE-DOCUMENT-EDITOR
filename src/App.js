import React, { useEffect, useRef, useState } from 'react';
import { io } from "socket.io-client";
import axios from 'axios';

const SOCKET_URL = "http://localhost:4000";

function App() {
  const [content, setContent] = useState("");
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io(SOCKET_URL);

    axios.get(`${SOCKET_URL}/doc`).then(res => setContent(res.data.content));

    socketRef.current.on('receive-changes', (delta) => {
      setContent(delta);
    });

    return () => socketRef.current.disconnect();
  }, []);

  const handleChange = (e) => {
    setContent(e.target.value);
    socketRef.current.emit('send-changes', e.target.value);
    socketRef.current.emit('save-doc', e.target.value);
  };

  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'flex-start',
      height: '100vh',
      backgroundColor: '#f0f2f5',
      padding: '20px'
    }}>
      <h2 style={{ marginBottom: '20px', color: '#333', fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif' }}>
        Real-Time Collaborative Editor
      </h2>
      <textarea
        rows={20}
        style={{
          width: '80%',
          maxWidth: '800px',
          fontSize: '16px',
          lineHeight: '1.5',
          padding: '12px',
          borderRadius: '8px',
          border: '1px solid #ccc',
          boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
          fontFamily: 'Courier New, Courier, monospace',
          resize: 'vertical',
          backgroundColor: '#fff',
          outline: 'none'
        }}
        value={content}
        onChange={handleChange}
      />
    </div>
  );
}

export default App;
