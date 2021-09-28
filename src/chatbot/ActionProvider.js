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

  handleCreateBankAccount = () => {
    const message = this.createChatBotMessage(
      "Please select a Account Type", 
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
