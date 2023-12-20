import React, { useEffect, useState } from 'react';

export default function StudentOpt3() {
    const [marks, setMarks] = useState([]);
    const [studentId, setStudentId] = useState('');

    useEffect(() => {
        fetchMarks();
    }, [studentId]);

    const fetchMarks = () => {
        if (studentId) {
            fetch(`http://localhost:5000/api/marks/${studentId}`)
                .then((response) => response.json())
                .then((data) => {
                    setMarks(data);
                })
                .catch((error) => {
                    console.error('Error fetching marks:', error);
                });
        }
    };

    const handleLogin = (event) => {
        event.preventDefault();
        const loginId = event.target.elements.loginId.value;
        const password = event.target.elements.password.value;

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
        <center>
            <br />
            <h1>Student Marks</h1>
            {studentId ? (
                <table>
                    <thead>
                        <tr>
                            <th>Course Code</th>
                            <th>Final Exam</th>
                            <th>Midterm</th>
                            <th>Quiz</th>
                            <th>Assignment</th>
                            <th>Total Marks</th>
                            <th>Obtained Marks</th>
                            <th>Percentage</th>
                        </tr>
                    </thead>
                    <tbody>
                        {marks.map((mark) => (
                            <tr key={mark.course_code}>
                                <td>{mark.course_code}</td>
                                <td>{mark.final_exam}</td>
                                <td>{mark.midterm}</td>
                                <td>{mark.quiz}</td>
                                <td>{mark.assignment}</td>
                                <td>{mark.total_marks}</td>
                                <td>{mark.obtainedMarks}</td>
                                <td>{mark.percentage}</td>
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
    );
}
