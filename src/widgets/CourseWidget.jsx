import React from "react";

const CourseWidget = () => {
  const courses = ["Maths", "Physics", "Chemistry"];
  return (
    <div>
      <h3>Pick your course</h3>
      <div className="courses-div">
        {courses.map((course, index) => (
          <button className="courses-btn" key={index}>
            {course}
          </button>
        ))}
      </div>
    </div>
  );
};

export default CourseWidget;
