import React, { useEffect, useState } from 'react';

export default function AdminOpt3() {
    const [students, setStudents] = useState([]);
    const [editableRow, setEditableRow] = useState('');

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

    const handleEdit = (studentId) => {
        setEditableRow(studentId);
    };

    const handleSaveChanges = (studentId) => {
        // Prepare the updated student data
        const updatedData = {
            student_name: document.getElementById(`studentName_${studentId}`).value,
            father_name: document.getElementById(`fatherName_${studentId}`).value,
            batch_id: document.getElementById(`batchId_${studentId}`).value,
            section: document.getElementById(`section_${studentId}`).value,
        };

        // Make an API request to update the student's data
        fetch(`http://localhost:5000/api/update-student/${studentId}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedData),
        })
            .then((response) => response.json())
            .then((data) => {
                console.log('Student data updated:', data);

                // Reset the editable row to disable editing
                setEditableRow('');

                // Update the table with the updated data
                setStudents((prevStudents) =>
                    prevStudents.map((student) =>
                        student.student_id === studentId ? { ...student, ...updatedData } : student
                    )
                );
            })
            .catch((error) => {
                console.error('Error updating student data:', error);
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
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((student) => (
                        <tr key={student.student_id}>
                            <td>
                                {editableRow === student.student_id ? (
                                    <input type="text" defaultValue={student.student_id} disabled />
                                ) : (
                                    student.student_id
                                )}
                            </td>
                            <td>
                                {editableRow === student.student_id ? (
                                    <input
                                        type="text"
                                        defaultValue={student.student_name}
                                        id={`studentName_${student.student_id}`}
                                    />
                                ) : (
                                    student.student_name
                                )}
                            </td>
                            <td>
                                {editableRow === student.student_id ? (
                                    <input
                                        type="text"
                                        defaultValue={student.father_name}
                                        id={`fatherName_${student.student_id}`}
                                    />
                                ) : (
                                    student.father_name
                                )}
                            </td>
                            <td>
                                {editableRow === student.student_id ? (
                                    <input
                                        type="text"
                                        defaultValue={student.batch_id}
                                        id={`batchId_${student.student_id}`}
                                    />
                                ) : (
                                    student.batch_id
                                )}
                            </td>
                            <td>
                                {editableRow === student.student_id ? (
                                    <input
                                        type="text"
                                        defaultValue={student.section}
                                        id={`section_${student.student_id}`}
                                    />
                                ) : (
                                    student.section
                                )}
                            </td>
                            <td>
                                {editableRow === student.student_id ? (
                                    <button onClick={() => handleSaveChanges(student.student_id)}>Save Changes</button>
                                ) : (
                                    <button onClick={() => handleEdit(student.student_id)}>Edit</button>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
    );
}