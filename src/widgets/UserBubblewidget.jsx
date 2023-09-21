import React, { useState } from "react";

const UserBubblewidget = (props) => {
  const handleClick = () => {
    if (props.msgText === "Welcome") {
      props.actions.initialAction();
    } else if (props.msgText === "Thanks") {
      props.actions.thanksAction();
    } else if (props.msgText === "Pick Date") {
      props.actions.pickindDateAction();
    }
  };
  return (
    <div>
      <button onClick={() => handleClick()}>{props.msgText}</button>
    </div>
  );
};

export default UserBubblewidget;
