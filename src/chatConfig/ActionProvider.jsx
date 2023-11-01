import React, { useEffect } from "react";
import { createClientMessage } from "react-chatbot-kit";
import { SlotState } from "../Context/Context";

const ActionProvider = ({ createChatBotMessage, setState, children }) => {
  //keep updating state for our messages
  const updateState = (message) => {
    setState((prev) => ({
      ...prev,
      messages: [...prev.messages, message],
    }));
  };
  //fetching our date and time from context
  const {
    selectedDay,
    selectedTime,
    selectedSlot,
    setSelectedSlot,
    course,
    selectedCourse,
  } = SlotState();
  useEffect(() => {
    setSelectedSlot(selectedDay + selectedTime);
  }, [selectedDay, selectedTime, selectedSlot]);

  //putting our intial action after clicking on welcome button
  const initialAction = () => {
    const message = createChatBotMessage(
      "Welcome to student course booking bot",
      {
        widget: "ThanksBtn",
      }
    );
    updateState(message);
  };
  const thanksAction = () => {
    const message = createClientMessage("Thanks Mate.. Lets get started", {
      widget: "PickdateBtn",
    });
    updateState(message);
  };
  const pickindDateAction = () => {
    const message = createChatBotMessage("Select your date..", {
      widget: "dateStrip",
    });
    updateState(message);
  };
  const pickTime = () => {
    const message = createChatBotMessage("Pick your time..", {
      widget: "timeStrip",
    });
    updateState(message);
  };
  const bookedSlot = () => {
    console.log("inside bookedslot");
    const message = createChatBotMessage(
      `You booked slot for: ${selectedSlot}`,
      {
        widget: "courseWidget",
      }
    );
    updateState(message);
  };
  const pickCourse = async () => {
    let message = createChatBotMessage(
      `You selected a slot for : ${course} course`
    );

    updateState(message);

    await new Promise((resolve) => {
      setTimeout(resolve, 2000);
    });
    message = createChatBotMessage(
      `Thank you for picking up a course with us..`
    );
    updateState(message);
  };
  return (
    <div>
      {React.Children.map(children, (child) => {
        return React.cloneElement(child, {
          actions: {
            initialAction,
            thanksAction,
            pickindDateAction,
            pickTime,
            bookedSlot,
            pickCourse,
          },
        });
      })}
    </div>
  );
};

export default ActionProvider;
