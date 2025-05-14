class MessageParser {
    constructor(actionProvider, createChatBotMessage) {
      this.actionProvider = actionProvider;
      this.createChatBotMessage = createChatBotMessage;
    }
  
    parse(message) {
      const lowerCaseMessage = message.toLowerCase();
  
      if (lowerCaseMessage.includes("ahoj")) {
        this.actionProvider.handleHello();
      }
    }
  }
  
export default MessageParser;
  