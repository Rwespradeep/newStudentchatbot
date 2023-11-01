import React, { useEffect } from "react";
import { SlotState } from "../Context/Context";

const CourseWidget = (props) => {
  const { course, selectedCourse } = SlotState();
  const courses = ["Maths", "Physics", "Chemistry"];
  const handleCourse = (e) => {
    selectedCourse(e.target.innerText);
  };
  useEffect(() => {
    if (course !== null) {
      props.actions.pickCourse();
    }
  }, [course]);

  return (
    <div>
      <h3>Pick your course</h3>
      <div className="courses-div">
        {courses.map((course, index) => (
          <button
            className="courses-btn"
            key={index}
            onClick={(e) => handleCourse(e)}
          >
            {course}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseWidget;
