// src/components/Chatbot.js
import React, { useState } from 'react';
import { Box, TextField, IconButton, Paper, Typography } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import axios from 'axios';

const Chatbot = () => {
  const [messages, setMessages] = useState([{ sender: 'bot', text: 'Ahoj! Jak ti mohu pomoci?' }]);
  const [input, setInput] = useState('');

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { sender: 'user', text: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');

    try {
      const res = await axios.post('https://api.openai.com/v1/chat/completions', {
        model: 'gpt-3.5-turbo',
        messages: [{ role: 'user', content: input }],
      }, {
        headers: {
          Authorization: `Bearer YOUR_OPENAI_API_KEY`, // Nahraď svou API key
          'Content-Type': 'application/json',
        },
      });

      const botMessage = {
        sender: 'bot',
        text: res.data.choices[0].message.content.trim(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err) {
      setMessages((prev) => [...prev, { sender: 'bot', text: 'Došlo k chybě při získávání odpovědi.' }]);
    }
  };

  return (
    <Paper
      elevation={3}
      sx={{
        position: 'fixed',
        bottom: 16,
        right: 16,
        width: 300,
        maxHeight: 400,
        overflow: 'auto',
        p: 2,
        zIndex: 1300,
      }}
    >
      <Typography variant="h6" gutterBottom>Chatbot</Typography>
      <Box sx={{ mb: 1, maxHeight: 260, overflowY: 'auto' }}>
        {messages.map((msg, i) => (
          <Typography
            key={i}
            align={msg.sender === 'user' ? 'right' : 'left'}
            sx={{ mb: 0.5 }}
          >
            <strong>{msg.sender === 'user' ? 'Ty' : 'Bot'}:</strong> {msg.text}
          </Typography>
        ))}
      </Box>
      <Box sx={{ display: 'flex' }}>
        <TextField
          size="small"
          fullWidth
          variant="outlined"
          placeholder="Napiš zprávu..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
        />
        <IconButton onClick={handleSend}>
          <SendIcon />
        </IconButton>
      </Box>
    </Paper>
  );
};

export default Chatbot;
