import React from "react";

const AbsentStudent = ({students, toggleHandler}) => {
  return (
    <div className="absent-student">
      <h2 style={{ textAlign: "left" }}>Absent Students</h2>
      <ul key={students.id}>
        {students
          .filter((item) => item.isPresent === false)
          .map((student) => (
            <li>
              <span>{student.name} </span>
              <button onClick={() => toggleHandler(student.id)}>
                Accidentally Added
              </button>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default AbsentStudent;
