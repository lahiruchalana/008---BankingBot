import React from "react";

import "./Options.css";

const Options = (props) => {
  const options = [
    { text: "Commercial Payments", handler: () => {}, id: 1 },
    { text: "Trade Payments", handler: () => {}, id: 2 },
    { text: "Foreign Exchange", handler: () => {}, id: 3 },
    // {
    //   text: "Create Account",
    //   handler: props.actionProvider.handleJavascriptQuiz,
    //   id: 1,
    // },
  ];

  const buttonsMarkup = options.map((option) => (
    <button key={option.id} onClick={option.handler} className="option-button">
      {option.text}
    </button>
  ));

  return <div className="options-container">{buttonsMarkup}</div>;
};

export default Options;
