class ActionProvider {
  constructor(createChatBotMessage, setStateFunc) {
    this.createChatBotMessage = createChatBotMessage;
    this.setState = setStateFunc;
  }

  greet = () => {
    const message = this.createChatBotMessage("Hello Friend.");
    this.addMessageToState(message);
  };

  endingOfConversation = () => {
    const message = this.createChatBotMessage("Thank you for using our service.. Stay with us!! Good Bye!!");
    this.addMessageToState(message);
  };

  // SmartPay section bot messages
  handleSmartPayCommercial = () => {
    const Text = 'Look like you need to know how to do commercial payments.\n1. You should have a online banking/ mobile banking or credit/debit card\n2. visit ### this link to pay your any commercial payment\n3. first fill your credit or debiot card number\n4. then add OTP'
    const message = this.createChatBotMessage(Text);
    this.addMessageToState(message);
  };
  handleSmartPayTrade = () => {
    const Text = 'Look like you need to know how to do trade payments.\n1. You should have a online banking/ mobile banking or credit/debit card\n2. visit ### this link to pay your any commercial payment\n3. first fill your credit or debiot card number\n4. then add OTP'
    const message = this.createChatBotMessage(Text);
    this.addMessageToState(message);
  };
  handleSmartPayForeignExchanges = () => {
    const Text = 'Look like you need to know how to do foreign exchanges payments.\n1. You should have a online banking/ mobile banking or credit/debit card\n2. visit ### this link to pay your any commercial payment\n3. first fill your credit or debiot card number\n4. then add OTP'
    const message = this.createChatBotMessage(Text);
    this.addMessageToState(message);
  };
  handleSmartPay = () => {
    const Text = "Need any payment?"
    const message = this.createChatBotMessage(
      Text , 
      {
        widget: "paymentTypeOptions",
      }
      );
      this.addMessageToState(message);
    };
    

    handleCreateBankAccount = () => {
      const message = this.createChatBotMessage(
        "Select Your Account Type", 
      {
        widget: "accountTypeOptions",
      }
    );
    this.addMessageToState(message);
  };

  handleJavascriptQuiz = () => {
    const message = this.createChatBotMessage(
      "Thank you! Here is information to create a new account for different type of accounts.",
      {
        widget: "javascriptQuiz",
      }
    );

    this.addMessageToState(message);
  };

  handlenextRoundOfOptions = () => {
    const message = this.createChatBotMessage(
      "Thank you! Please select your requirement.",
      {
        widget: "nextRoundOfOptions",
      }
    );

    this.addMessageToState(message);
  };

  addMessageToState = (message) => {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }));
  };
}

export default ActionProvider;
