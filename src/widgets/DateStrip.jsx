import React, { useContext, useState } from "react";
import DatePicker from "react-horizontal-datepicker";
import { SlotState } from "../Context/Context";

const DateStrip = (props) => {
  //   const [selectedDay, setSelectedDay] = useState(null);
  const { selectedDay, setSelectedDay } = SlotState();
  const selectedDayHandler = (val) => {
    setSelectedDay(val.toString().substring(0, 16));
    if (selectedDay) {
      props.actions.pickTime();
    }
  };
  return (
    <DatePicker
      getSelectedDay={selectedDayHandler}
      endDate={100}
      selectDate={new Date().getDate()}
      labelFormat={"MMMM"}
      color={"rgb(10,134,180)"}
    />
  );
};

export default DateStrip;
