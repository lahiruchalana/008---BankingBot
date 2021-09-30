class MessageParser {
  constructor(actionProvider) {
    this.actionProvider = actionProvider;
  }

  parse(message) {
    console.log(message);
    const lowercase = message.toLowerCase();

    if (lowercase.includes("hello") || lowercase.includes("hi") || lowercase.includes("hey") ) {
      this.actionProvider.greet();
    }

      // SmartPay section bot messages
    if (lowercase.includes("commercial payments") || lowercase.includes("commercial payment") ) {
      this.actionProvider.handleSmartPayCommercial();
    }
    if (lowercase.includes("trade payments") || lowercase.includes("trade payment") ) {
      this.actionProvider.handleSmartPayTrade();
    }
    if (lowercase.includes("foreign exchange payments") || lowercase.includes("foreign exchange payment")) {
      this.actionProvider.handleSmartPayForeignExchanges();
    }
    if (lowercase.includes("smartpay") || lowercase.includes("payment") || lowercase.includes("pay")
        || lowercase.includes("paying") || lowercase.includes("paid") || 
        lowercase.includes("bill payment") || lowercase.includes("bill") || lowercase.includes("payments")) {
      this.actionProvider.handleSmartPay();
    }
    
    if (lowercase.includes("account") || lowercase.includes("create account") || lowercase.includes("bank account")
        || lowercase.includes("create bank account") ) {
      this.actionProvider.handleCreateBankAccount();
    }

    if (lowercase.includes("saving") || lowercase.includes("saving account")) {
      this.actionProvider.handleJavascriptQuiz();
    }

    // if (lowercase.includes("current") || lowercase.includes("account")) {
    //   this.actionProvider.handleJavascriptQuiz();
    // }

    // if (lowercase.includes("saving") || lowercase.includes("account") || lowercase.includes("saving account")
    //     || lowercase.includes("create account") || lowercase.includes("bank account")) {
    //   this.actionProvider.handleJavascriptQuiz();
    // }

    if (lowercase.includes("yes") || lowercase.includes("option") || lowercase.includes("other option")
      || lowercase.includes("facilities") || lowercase.includes("how can you help me") || lowercase.includes("other")
      || lowercase.includes("i need more") || lowercase.includes("i need to know more")  || lowercase.includes("more option") ) {
      this.actionProvider.handlenextRoundOfOptions();
    } 

    if (lowercase.includes("thanks")) {
      this.actionProvider.endingOfConversation();
    } 
  }
}

export default MessageParser;
