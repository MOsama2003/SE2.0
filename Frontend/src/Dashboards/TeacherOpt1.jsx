import React, { useEffect, useState } from 'react';

export default function TeacherOpt1() {
    const [courses, setCourses] = useState([]);
    const [teacherId, setTeacherId] = useState('');
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        fetchTeacherCourses();
    }, [teacherId]);

    const fetchTeacherCourses = () => {
        if (teacherId) {
            fetch(`http://localhost:5000/api/teacher-courses?teacherId=${teacherId}`)
                .then((response) => response.json())
                .then((data) => {
                    setCourses(data);
                })
                .catch((error) => {
                    console.error('Error fetching teacher courses:', error);
                });
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();
        // Get the teacher login credentials from the form
        const loginId = event.target.elements.loginId.value;
        const password = event.target.elements.password.value;

        // Make a request to the server for teacher authentication
        fetch('http://localhost:5000/api/teacher-login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ login_id: loginId, password: password }),
        })
            .then((response) => response.json())
            .then((data) => {
                const { teacherId } = data;
                setTeacherId(teacherId);
                setIsLoggedIn(true); // Set isLoggedIn to true after successful login
            })
            .catch((error) => {
                console.error('Error fetching teacher login:', error);
            });
    };

    return (
        <>
            <center>
                <br />
                <h1 className={isLoggedIn ? "display-none": ""}>Your Courses are Hidden</h1>
                {isLoggedIn ? (<>
                    <h1>jjj</h1>
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
                    </table></>
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