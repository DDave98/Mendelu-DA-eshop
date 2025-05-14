import Chatbot from 'react-chatbotify';

<Chatbot
  id="main"
  options={{
    theme: {
      primaryColor: "#1976d2",
    },
    botMessage: {
      background: "#1976d2",
      color: "#fff",
    },
  }}
  flow={[
    {
      id: 'start',
      message: 'Ahoj! Jak ti mohu pomoci?',
      trigger: 'user-response',
    } as any,
    {
      id: 'user-response',
      user: true,
      trigger: 'bot-reply',
    } as any,
    {
      id: 'bot-reply',
      message: 'To je skvělé!',
      trigger: 'user-response',
    } as any,
  ]}
/>
