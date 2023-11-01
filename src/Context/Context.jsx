import React, { createContext, useContext, useState } from "react";

// Create a context
export const SlotContext = createContext();

// Create a provider component
export function SlotContextProvider({ children }) {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [selectedDay, setSelectedDay] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);

  const [course, selectedCourse] = useState(null);

  return (
    <SlotContext.Provider
      value={{
        selectedSlot,
        setSelectedSlot,
        selectedDay,
        setSelectedDay,
        selectedTime,
        setSelectedTime,
        course,
        selectedCourse,
      }}
    >
      {children}
    </SlotContext.Provider>
  );
}

export default SlotContextProvider;

export const SlotState = () => {
  return useContext(SlotContext);
};
