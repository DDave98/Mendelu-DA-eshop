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
// import ChatBot from 'react-chatbotify';
import { DetailProduct } from './pages/detail';
import { CartProvider } from './data/cartContext';

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
/*
const settings = {
  general: {embedded: false},
  chatHistory: {storageKey: "playground"},
  botBubble: {simulateStream: true}
}

const flow = {
  start: {
    message: "Vítejte na našem e-shopu! Jak vám mohu pomoci dnes?",
    path: "ask_for_help"
  },
  ask_for_help: {
    message: "Co byste chtěli udělat? Můžete napsat: 'Hledat produkt', 'Zobrazit košík', nebo 'Dokončit nákup'.",
    user: true, // Uživatel zadává text
    path: "handle_user_input"
  },
  handle_user_input: {
    message: (params:any) => {
      const userInput = params.userInput.toLowerCase();
      if (userInput.includes('hledat produkt')) {
        return "Skvělé! Jaký produkt hledáte?";
      } else if (userInput.includes('košík')) {
        return "Zde je váš košík: (vyjmenuj položky). Chcete přidat nebo odebrat položky?";
      } else if (userInput.includes('dokoncit nakup')) {
        return "Přejdeme k dokončení nákupu. Chcete pokračovat?";
      } else {
        return "Omlouvám se, nerozumím. Zkuste napsat 'Hledat produkt', 'Zobrazit košík' nebo 'Dokončit nákup'.";
      }
    },
    path: "handle_user_input"
  },
  // Hledání produktu
  product_search: {
    message: "Hledám produkty pro vás... Jaký konkrétní produkt hledáte?",
    user: true,
    path: "show_products"
  },
  show_products: {
    message: (params:any) => `Zde jsou produkty pro váš dotaz: [produkt1, produkt2, produkt3]. Chcete nějaký přidat do košíku?`,
    path: "handle_user_input"
  },
  // Košík
  show_cart: {
    message: "Zde je obsah vašeho košíku: (seznam produktů). Co chcete dělat dál?",
    path: "handle_user_input"
  },
  // Dokončení nákupu
  complete_checkout: {
    message: "Skvělé! Přejdeme k dokončení nákupu. Potřebujeme vaši adresu a platební údaje.",
    user: true,
    path: "thank_you"
  },
  thank_you: {
    message: "Děkujeme za nákup! Vaše objednávka byla úspěšně přijata. Těšíme se na vaši další návštěvu!",
    path: "end"
  },
  end: {
    message: "Pokud máte nějaké další otázky, stačí napsat!",
    path: "end"
  }
};*/


function App() {

  /*const chatbot = (<script>
  {
    function()
    {
      if(!window.chatbase||window.chatbase("getState")!=="initialized")
        {window.chatbase=(...arguments)=>{
          if(!window.chatbase.q){window.chatbase.q=[]}window.chatbase.q.push(arguments)
        	};window.chatbase=new Proxy(window.chatbase,{get(target,prop){if(prop==="q"){return target.q}return(...args)=>target(prop,...args)}})}const onLoad=function(){const script=document.createElement("script");script.src="https://www.chatbase.co/embed.min.js";script.id="7oiLltXk7XGkqENEI18EB";script.domain="www.chatbase.co";document.body.appendChild(script)};if(document.readyState==="complete"){onLoad()}
        else{window.addEventListener("load",onLoad)}
    }();
  }
  </script>)*/


  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CartProvider>
        <Router>
          <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Container component="main" sx={{ mt: 4, mb: 4, flex: 1 }}>
              <Routes>
                <Route index element={<Home />} />
                <Route path="products" element={<Services />} />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<Checkout />} />
                <Route path="products/:id" element={<DetailProduct />} />
              </Routes>
            </Container>
            {/*<ChatBot flow={flow} settings={settings} />*/}
            <iframe
  src="https://www.chatbase.co/chatbot-iframe/7oiLltXk7XGkqENEI18EB"
  width="100%"
  style={{ height: "100%", minHeight: "700px" }}
  frameBorder="0"
  title="Chatbot Frame"
></iframe>
          </Box>
        </Router>
      </CartProvider>
    </ThemeProvider>
  );
}

export default App;
