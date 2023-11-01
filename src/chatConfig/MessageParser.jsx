import React from "react";
import { createChatBotMessage } from "react-chatbot-kit";

const MessageParser = ({ children, actions }) => {
  const parse = (message) => {
    actions.initialAction();
    // if(message.contains)
  };

  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          parse: parse,
          actions,
        });
      })}
    </div>
  );
};

export default MessageParser;
