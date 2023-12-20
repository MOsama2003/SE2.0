import React, { useEffect, useState } from 'react';

export default function TeacherOpt3() {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [students, setStudents] = useState([]);
    const [attendance, setAttendance] = useState([]);


    useEffect(() => {
        fetchTeacherCourses();
    }, []);

    const fetchTeacherCourses = async () => {
        try {
            const teacherId = localStorage.getItem('teacherId');
            const response = await fetch(`http://localhost:5000/api/teacher-courses?teacherId=${teacherId}`);

            // Check if the response is not successful (e.g., 404 or 500 error)
            if (!response.ok) {
                const errorData = await response.json();
                console.error('Error fetching teacher courses:', errorData.message);
                return; // Stop further processing if there's an error
            }

            const data = await response.json();
            setCourses(data);
        } catch (error) {
            console.error('Error fetching teacher courses:', error);
        }
    };


    const handleCourseSelection = (event) => {
        setSelectedCourse(event.target.value);
        setStudents([]);
        setAttendance([]);

        if (event.target.value) {
            fetchStudentsByCourse(event.target.value);
        }
    };

    const fetchStudentsByCourse = async (courseCode) => {
        try {
            const teacherId = localStorage.getItem('teacherId');
            const response = await fetch(`http://localhost:5000/api/teacher-courses/${teacherId}/students?courseCode=${courseCode}`);
            const data = await response.json();

            if (response.ok) {
                setStudents(data);
                setAttendance(
                    data.map((student) => ({
                        studentId: student.student_id,
                        attendanceStatus: 'Present',
                    }))
                );
            } else {
                console.error('Error fetching students:', data.message);
            }
        } catch (error) {
            console.error('Error fetching students:', error);
        }
    };

    const handleFetchStudents = (event) => {
        event.preventDefault();
        fetchStudentsByCourse(selectedCourse);
    };

    const handleAttendanceChange = (studentId, isChecked) => {
        setAttendance((prevAttendance) => {
            const updatedAttendance = [...prevAttendance];
            const index = updatedAttendance.findIndex((item) => item.studentId === studentId);

            if (index !== -1) {
                if (isChecked) {
                    updatedAttendance[index].attendanceStatus = 'Present';
                } else {
                    updatedAttendance[index].attendanceStatus = 'Absent';
                }
            }

            return updatedAttendance;
        });
    };

    const handleSubmitAttendance = async () => {
        try {
            const response = await fetch('http://localhost:5000/api/submit-attendance', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    attendance: attendance.map((item) => ({
                        studentId: item.studentId,
                        courseCode: selectedCourse,
                        attendanceStatus: item.attendanceStatus,
                    })),
                }),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Attendance submitted successfully:', data.message);
                alert('Attendance submitted successfully');
            } else {
                console.error('Error submitting attendance:', data.message);
                alert('Error submitting attendance. Please try again later.');
            }
        } catch (error) {
            console.error('Error submitting attendance:', error);
            alert('An error occurred while submitting attendance. Please try again later.');
        }
    };
    
    return (
        <center>
            <br />
            <h1>Mark Attendance</h1>
            <form onSubmit={handleFetchStudents}>
                <label>
                    Select Course:
                    <select value={selectedCourse} onChange={handleCourseSelection}>
                        <option value="">Select Course</option>
                        {courses.map((course) => (
                            <option key={course.course_code} value={course.course_code}>
                                {course.course_name}
                            </option>
                        ))}
                    </select>
                </label>
                <button type="submit">Load Enrolled Students</button>
            </form>
            {students.length > 0 && (
                <div>
                    <h2>Attendance for Course: {selectedCourse}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Attendance Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => (
                                <tr key={student.student_id}>
                                    <td>{student.student_id}</td>
                                    <td>{student.student_name}</td>
                                    <td>
                                        <input
                                            type="checkbox"
                                            checked={
                                                attendance.some(
                                                    (item) =>
                                                        item.studentId === student.student_id &&
                                                        item.attendanceStatus === 'Present'
                                                ) || false
                                            }
                                            onChange={(e) =>
                                                handleAttendanceChange(
                                                    student.student_id,
                                                    e.target.checked
                                                )
                                            }
                                        />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <button onClick={handleSubmitAttendance}>Submit Attendance</button>
                </div>
            )}
        </center>
    );
}
