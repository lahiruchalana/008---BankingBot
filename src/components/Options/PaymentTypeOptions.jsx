import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    { 
      text: "Commercial Payments",      
      handler: props.actionProvider.handleSmartPayCommercial,
      id: 1 
    },
    {  
      text: "Trade Payments",       
      handler: props.actionProvider.handleSmartPayTrade,
      id: 2 
    },
    { 
      text: "Foreign Exchange",       
      handler: props.actionProvider.handleSmartPayForeignExchanges,
      id: 3 
    },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
