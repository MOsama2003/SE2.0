import React, { useEffect, useState } from 'react';

export default function TeacherOpt4() {
    const [courses, setCourses] = useState([]);
    const [selectedCourse, setSelectedCourse] = useState('');
    const [students, setStudents] = useState([]);

    useEffect(() => {
        fetchTeacherCourses();
    }, []);

    const fetchTeacherCourses = async () => {
        try {
            const teacherId = localStorage.getItem('teacherId');
            const response = await fetch(`http://localhost:5000/api/teacher-courses?teacherId=${teacherId}`);
            const data = await response.json();

            if (response.ok) {
                setCourses(data);
            } else {
                console.error('Error fetching teacher courses:', data.message);
            }
        } catch (error) {
            console.error('Error fetching teacher courses:', error);
        }
    };

    const handleCourseSelection = (event) => {
        setSelectedCourse(event.target.value);
        setStudents([]);

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
                const studentsWithTotalMarks = data.map((student) => {
                    return {
                        ...student,
                        total_marks: 100,
                    };
                });

                console.log(studentsWithTotalMarks);
                setStudents(studentsWithTotalMarks);
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

    const handleMarksChange = (studentId, markType, value) => {
        setStudents((prevStudents) => {
            return prevStudents.map((student) => {
                if (student.student_id === studentId) {
                    return {
                        ...student,
                        [markType]: value,
                    };
                }
                return student;
            });
        });
    };

    const handleSubmitMarks = async () => {
        try {
            const marksData = students.map((student) => {
                const studentId = student.student_id;
                const courseCode = selectedCourse;
                const finalExam = student.final || null;
                const midterm = student.midterm || null;
                const quiz = student.quiz || null;
                const assignment = student.assignment || null;
                const obtainedMarks = quiz + assignment + midterm + finalExam;
                const percentage = (obtainedMarks / (student.total_marks || 0)) * 100;

                return {
                    student_id: studentId,
                    course_code: courseCode,
                    final_exam: finalExam,
                    midterm,
                    quiz,
                    assignment,
                    obtainedMarks: obtainedMarks || 0.00,
                    percentage: percentage || 0.00,
                };
            });

            const response = await fetch('http://localhost:5000/api/store-marks', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(marksData),
            });

            const data = await response.json();

            if (response.ok) {
                console.log('Marks submitted successfully');
                alert('Marks submitted successfully');
            } else {
                console.error('Error submitting marks:', data.message);
            }
        } catch (error) {
            console.error('Error submitting marks:', error);
        }
    };

    return (
        <center>
            <br />
            <h1>Update Marks</h1>
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
                    <h2>Enrolled Students for Course: {selectedCourse}</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Student ID</th>
                                <th>Student Name</th>
                                <th>Quiz</th>
                                <th>Assignment</th>
                                <th>Mid-Term</th>
                                <th>Final</th>
                                <th>Obtained Marks</th>
                                <th>Total Marks</th>
                                <th>Percentage</th>
                            </tr>
                        </thead>
                        <tbody>
                            {students.map((student) => {
                                const quizMarks = parseFloat(student.quiz) || 0;
                                const assignmentMarks = parseFloat(student.assignment) || 0;
                                const midtermMarks = parseFloat(student.midterm) || 0;
                                const finalMarks = parseFloat(student.final) || 0;
                                const obtainedMarks = quizMarks + assignmentMarks + midtermMarks + finalMarks;
                                const percentage = (obtainedMarks / student.total_marks) * 100;

                                return (
                                    <tr key={student.student_id}>
                                        <td>{student.student_id}</td>
                                        <td>{student.student_name}</td>
                                        <td>
                                            <input
                                                type="number"
                                                value={student.quiz}
                                                onChange={(e) => handleMarksChange(student.student_id, 'quiz', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={student.assignment}
                                                onChange={(e) => handleMarksChange(student.student_id, 'assignment', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={student.midterm}
                                                onChange={(e) => handleMarksChange(student.student_id, 'midterm', e.target.value)}
                                            />
                                        </td>
                                        <td>
                                            <input
                                                type="number"
                                                value={student.final}
                                                onChange={(e) => handleMarksChange(student.student_id, 'final', e.target.value)}
                                            />
                                        </td>
                                        <td>{obtainedMarks}</td>
                                        <td>{student.total_marks}</td>
                                        <td>{percentage.toFixed(2)}%</td>
                                    </tr>
                                );
                            })}
                        </tbody>
                    </table>
                    <button onClick={handleSubmitMarks}>Submit Marks</button>
                </div>
            )}
        </center>
    );
}
