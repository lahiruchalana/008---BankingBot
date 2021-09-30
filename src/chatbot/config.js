import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

import Options from "../components/Options/Options";
import AccountTypeOptions from "../components/Options/AccountTypeOptions";
import PaymentTypeOptions from "../components/Options/PaymentTypeOptions";
import Quiz from "../components/Quiz/Quiz";

const config = {
  botName: "BankingBot",
  initialMessages: [
    createChatBotMessage(`Hello!!! How can I help you?`, {
      widget: "options",
    }),
  ],
  widgets: [
    {
      widgetName: "options",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "nextRoundOfOptions",
      widgetFunc: (props) => <Options {...props} />,
    },
    {
      widgetName: "paymentTypeOptions",
      widgetFunc: (props) => <PaymentTypeOptions {...props} />,
    },
    {
      widgetName: "accountTypeOptions",
      widgetFunc: (props) => <AccountTypeOptions {...props} />,
    },
    {
      widgetName: "javascriptQuiz",
      widgetFunc: (props) => <Quiz {...props} />,
      props: {
        questions: [
          {
            question: "How to create a Saving Account",
            answer:
              "1. Visit nearest branch of our bank 2. Gather required documents(NIC, Mobile Phone number) 3. Choose a joint or individual account 4. Fund your account",
            id: 1,
          },
          {
            question: "How to create a Current Account",
            answer:
              "1. Visit nearest branch of our bank 2. Gather required documents(NIC, Mobile Phone number) 3. Choose a joint or individual account 4. Fund your account",
            id: 2,
          },
          {
            question: "How to create a Term Deposits",
            answer:
              "1. Visit nearest branch of our bank 2. Gather required documents(NIC, Mobile Phone number) 3. Choose a joint or individual account 4. Fund your account",
            id: 2,
          },
        ],
      },
    },
  ],
};

export default config;
