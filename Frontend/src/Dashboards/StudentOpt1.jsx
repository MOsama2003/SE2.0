import React, { useEffect, useState } from 'react';

export default function StudentOpt1() {
    const [courses, setCourses] = useState([]);
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        fetchEnrolledCourses();
    }, [studentId]);

    const fetchEnrolledCourses = () => {
        if (studentId) {
            fetch(`http://localhost:5000/api/students-enrolled-courses/${studentId}`)
                .then((response) => response.json())
                .then((data) => {
                    setCourses(data);
                })
                .catch((error) => {
                    console.error('Error fetching enrolled courses:', error);
                });
        }
    };

    // Your login logic goes here
    const handleLogin = (event) => {
        event.preventDefault();
        // Get the student login credentials from the form
        const loginId = event.target.elements.loginId.value;
        const password = event.target.elements.password.value;

        // Make a request to the server for student authentication
        fetch('http://localhost:5000/api/student-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login_id: loginId, password: password }),
        })
            .then((response) => response.json())
            .then((data) => {
                const { studentId } = data;
                setStudentId(studentId);
            })
            .catch((error) => {
                console.error('Error fetching student login:', error);
            });
    };

    return (
        <>
            <center>
                <br />
                <h1>Enrolled Courses</h1>
                {studentId ? (
                    <table>
                        <thead>
                            <tr>
                                <th>Course Code</th>
                                <th>Course Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {courses.map((course) => (
                                <tr key={course.course_code}>
                                    <td>{course.course_code}</td>
                                    <td>{course.course_name}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <form onSubmit={handleLogin}>
                        <label>
                            Login ID:
                            <input type="text" name="loginId" />
                        </label>
                        <label>
                            Password:
                            <input type="password" name="password" />
                        </label>
                        <button type="submit">Login</button>
                    </form>
                )}
            </center>
        </>
    );
}
