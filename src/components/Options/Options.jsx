import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    { 
      text: "SmartPay", 
      handler: props.actionProvider.handleSmartPay, 
      id: 1 
    },
    {
      text: "Create Account",
      handler: props.actionProvider.handleJavascriptQuiz,
      id: 2,
    },
    { text: "Bank Accounts", handler: () => {}, id: 3 },
    { text: "Online/Mobile Banking", handler: () => {}, id: 4 },
    { text: "Loan Facilities", handler: () => {}, id: 5 },
    { text: "Leasing Facilities", handler: () => {}, id: 6 },
    { text: "Credit/Debit Cards", handler: () => {}, id: 7 },
    { text: "Foreign Exchanges", handler: () => {}, id: 8 },
    { text: "Contact Live Support", handler: () => {}, id: 9 },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
