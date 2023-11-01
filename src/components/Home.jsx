import React from "react";
import Chatbot from "react-chatbot-kit";
import "react-chatbot-kit/build/main.css";
import config from "./../chatConfig/config";
import MessageParser from "./../chatConfig/MessageParser";
import ActionProvider from "./../chatConfig/ActionProvider";

const Home = () => {
  return (
    <div className="home-section">
      <div className="home-image-div">
        <img className="home-image" src="home-screen-image1.png" alt="home" />
      </div>
      <div className="chat-section">
        <Chatbot
          config={config}
          messageParser={MessageParser}
          actionProvider={ActionProvider}
        />
      </div>
    </div>
  );
};

export default Home;
