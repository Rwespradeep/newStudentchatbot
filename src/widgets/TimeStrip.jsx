import React, { useContext, useEffect, useState } from "react";
import { SlotState } from "../Context/Context";

const TimeStrip = (props) => {
  const morningTimes = ["8:00AM", "9:00AM", "10:00AM", "11:00AM"];
  const afternoonTimes = ["2:00PM", "3:00PM", "4:00PM", "5:00PM"];

  //   const [selectedTime, setSelectedTime] = useState(null);
  const { selectedTime, setSelectedTime, selectedSlot } = SlotState();
  console.log("Selected Time from Context:", selectedTime);

  const handleTimeClick = (event) => {
    setSelectedTime(event.target.innerText);
    console.log("Selected Time after Click:", event.target.innerText);
  };

  useEffect(() => {
    if (selectedTime != null) {
      props.actions.bookedSlot();
    } else {
      console.log("timestrip condition failed");
    }
  }, [selectedSlot]);
  return (
    <>
      <h3 className="time-header">Morning</h3>
      <div className="time-div">
        {morningTimes.map((time, index) => (
          <div className="time-parent" key={index}>
            <button
              className={`time-section ${
                selectedTime === time ? "selected" : ""
              }`}
              onClick={(event) => handleTimeClick(event)}
              disabled={selectedTime !== null && selectedTime !== time}
            >
              {time}
            </button>
          </div>
        ))}
      </div>
      <h3 className="time-header">Afternoon</h3>
      <div className="time-div">
        {afternoonTimes.map((time, index) => (
          <div className="time-parent" key={index}>
            <button
              className={`time-section ${
                selectedTime === time ? "selected" : ""
              }`}
              onClick={(event) => handleTimeClick(event)}
              disabled={selectedTime !== null && selectedTime !== time}
            >
              {time}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default TimeStrip;
