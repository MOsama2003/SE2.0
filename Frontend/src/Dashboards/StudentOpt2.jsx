import React, { useEffect, useState } from 'react';

export default function StudentOpt2() {
    const [courses, setCourses] = useState([]);
    const [studentId, setStudentId] = useState('');
    const [attendanceData, setAttendanceData] = useState([]);
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        if (isLoggedIn && studentId) {
            // Once the student is logged in and studentId is available, fetch attendance data
            fetchAttendanceData();
        }
    }, [isLoggedIn, studentId]);

    const fetchAttendanceData = () => {
        if (studentId) {
            fetch(`http://localhost:5000/api/attendance-data?student_id=${studentId}`)
                .then((response) => response.json())
                .then((data) => {
                    setAttendanceData(data);
                })
                .catch((error) => {
                    console.error('Error fetching attendance data:', error);
                });
        }
    };

    const handleLogin = async (event) => {
        event.preventDefault();
        // Get the student login credentials from the form
        const loginId = event.target.elements.loginId.value;
        const password = event.target.elements.password.value;

        try {
            // Make a request to the server for student authentication
            const response = await fetch('http://localhost:5000/api/student-login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ login_id: loginId, password: password }),
            });

            if (!response.ok) {
                throw new Error('Failed to fetch student login.');
            }

            const data = await response.json();
            const { studentId } = data;
            setStudentId(studentId);
            setIsLoggedIn(true);
        } catch (error) {
            console.error('Error fetching student login:', error);
        }
    };

    return (
        <>
            <center>
                <br />
                {isLoggedIn ? (
                    <>
                        <h2>Attendance Data</h2>
                        {attendanceData.length > 0 ? (
                            <table>
                                <thead>
                                    <tr>
                                        <th>Course Code</th>
                                        <th>Classes Attended</th>
                                        <th>Total Classes</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {attendanceData.map((entry) => (
                                        <tr key={entry.course_code}>
                                            <td>{entry.course_code}</td>
                                            <td>{entry.classes_attended}</td>
                                            <td>{entry.total_classes}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        ) : (
                            <p>No attendance data available.</p>
                        )}
                    </>
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
