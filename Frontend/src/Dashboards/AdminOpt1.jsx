import React, { useEffect, useState } from 'react';

export default function AdminOpt1() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = () => {
  fetch('http://localhost:5000/api/students-enrolled') 
    .then((response) => response.json())
    .then((data) => {
      setStudents(data);
    })
    .catch((error) => {
      console.error('Error fetching students:', error);
    });
};


  return (
    <center>
      <br />
      <h1>Students Enrolled</h1>
      <table>
        <thead>
          <tr>
            <th>Student ID</th>
            <th>Student Name</th>
            <th>Father's Name</th>
            <th>Batch ID</th>
            <th>Section</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student) => (
            <tr key={student.student_id}>
              <td>{student.student_id}</td>
              <td>{student.student_name}</td>
              <td>{student.father_name}</td>
              <td>{student.batch_id}</td>
              <td>{student.section}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </center>
  );
}
