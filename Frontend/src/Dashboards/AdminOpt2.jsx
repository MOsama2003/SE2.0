import React, { useState } from 'react';

export default function StudentForm() {
    const [studentId, setStudentId] = useState('');
    const [studentName, setStudentName] = useState('');
    const [fatherName, setFatherName] = useState('');
    const [batchId, setBatchId] = useState('');
    const [section, setSection] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Prepare the student data to be sent to the server
        const studentData = {
            studentId: studentId,
            studentName: studentName,
            fatherName: fatherName,
            batchId: batchId,
            section: section,
        };

        // Make an API request to your server to update the database
        fetch('http://localhost:5000/api/add-student', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(studentData),
        })
            .then((response) => {
                if (response.ok) {
                    // Reset the form fields
                    setStudentId('');
                    setStudentName('');
                    setFatherName('');
                    setBatchId('');
                    setSection('');
                    setErrorMessage('');
                    alert('Student added successfully');
                } else if (response.status === 400) {
                    response.text().then((error) => {
                        setErrorMessage(error);
                    });
                } else {
                    throw new Error('Error adding student');
                }
            })
            .catch((error) => {
                console.error('Error submitting student data:', error);
            });
    };

    return (
        <div>
            <br />
            <h1>Add Student</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Student ID:
                    <input
                        type="text"
                        value={studentId}
                        onChange={(e) => setStudentId(e.target.value)}
                        placeholder="SE-"
                        required
                    />
                </label>
                <br />
                <label>
                    Student Name:
                    <input
                        type="text"
                        value={studentName}
                        onChange={(e) => setStudentName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Father Name:
                    <input
                        type="text"
                        value={fatherName}
                        onChange={(e) => setFatherName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Batch ID:
                    <input
                        type="text"
                        value={batchId}
                        onChange={(e) => setBatchId(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Section:
                    <input
                        type="text"
                        value={section}
                        onChange={(e) => setSection(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Student</button>
            </form>
        </div>
    );
    }