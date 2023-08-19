import React, { useEffect, useState } from "react";

const Details = () => {
  const [students, setStudents] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/studentList")
      .then((res) => res.json())
      .then((data) => setStudents(data));
  }, []);
  return (
    <div>
      <h2>Details coming....</h2>
      <ul>
        {
            students.map((stu) => (
                <li>{stu.title} </li>
            ))
        }
      </ul>
    </div>
  );
};

export default Details;
