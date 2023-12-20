import React, { useEffect, useState } from 'react';

export default function TeacherOpt2() {
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchStudents();
    }, []);


    const fetchStudents = async () => {
        try {
            // Retrieve the logged-in teacherId from local storage
            const teacherId = localStorage.getItem('teacherId');
            console.log(teacherId)

            // Make an API request to fetch the students enrolled in the courses taught by the teacher
            const response = await fetch(`http://localhost:5000/api/teacher-courses/${teacherId}/students`);
            const data = await response.json();

            if (response.ok) {
                setStudents(data);
            } else {
                console.error('Error fetching students:', data.message);
            }
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    return (
        <center>
            <br />
            <h1>View Students Enrolled in Your Courses</h1>
            {students.length > 0 ? (
                <table>
                    <thead>
                        <tr>
                            <th>Student ID</th>
                            <th>Student Name</th>
                            <th>Course Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {students.map((student) => (
                            <tr key={student.student_id}>
                                <td>{student.student_id}</td>
                                <td>{student.student_name}</td>
                                <td>{student.course_name}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            ) : (
                <p>No students enrolled in your courses.</p>
            )}
        </center>
    );
}
