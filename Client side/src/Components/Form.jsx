import React from "react";

const Form = (props) => {
  const fetchList = () => {
    fetch("http://localhost:3000/studentList")
      .then((res) => res.json())
      .then((data) => props.setStudents(data));
  };
  const createStudentHandler = () => {
    if (props.studentName) {
      const newStudent = {
        id: Date.now(),
        name: props.studentName,
      };
      fetch("http://localhost:3000/studentList", {
        method: "POST",
        body: JSON.stringify(newStudent),
        headers: {
          "Content-type": "application/json",
        },
      })
        .then((res) => res.json())
        .then(() => {
          fetchList();
        });
      // props.setStudents([...props.students, newStudent]);
      props.setStudentName("");
    } else {
      alert("Enter a valid Name");
    }
  };

  const updateStudentHandler = () => {
    props.setStudents(
      props.students.map((student) => {
        if (student.id === props.editableStudent.id) {
          student.name = props.studentName;
        }
        return student;
      })
    );
    props.setEditMode(false);
    props.setStudentName("");
    props.setEditableStudent(null);
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.editMode ? updateStudentHandler() : createStudentHandler();
      }}
    >
      <input
        type="text"
        name="text"
        id="txt"
        placeholder="Enter your name"
        value={props.studentName}
        onChange={(e) => props.setStudentName(e.target.value)}
      />
      <button>{props.editMode ? "Update Student" : "Add Student"}</button>
    </form>
  );
};

export default Form;
