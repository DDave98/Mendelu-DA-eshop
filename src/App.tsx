import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Container, Box } from '@mui/material';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import ChatBot from 'react-chatbotify';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

const settings = {
  general: {embedded: true},
  chatHistory: {storageKey: "playground"},
  botBubble: {simulateStream: true}
}

const flow={
  start: {
      message: "Welcome to the playground 🥳! Edit and experiment as you wish!",
      path: "end_loop"
  },
  end_loop: {
      message: (params:any) => `Received: ${params.userInput}`,
      path: "end_loop"
  }
};

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navbar />
          <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="services" element={<Services />} />
              <Route path="cart" element={<Cart />} />
              <Route path="checkout" element={<Checkout />} />
            </Routes>
          </Container>
          <ChatBot flow={flow} settings={settings} />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
