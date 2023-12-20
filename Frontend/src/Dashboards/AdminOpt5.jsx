import React, { useState } from 'react';

export default function TeacherForm() {
    const [teacherId, setTeacherId] = useState('');
    const [teacherName, setTeacherName] = useState('');
    const [designation, setDesignation] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Prepare the teacher data to be sent to the server
        const teacherData = {
            teacherId: teacherId,
            teacherName: teacherName,
            designation: designation,
        };

        // Make an API request to your server to add the teacher to the database
        fetch('http://localhost:5000/api/add-teacher', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(teacherData),
        })
            .then((response) => {
                if (response.ok) {
                    // Reset the form fields
                    setTeacherId('');
                    setTeacherName('');
                    setDesignation('');
                    setErrorMessage('');
                    alert('Teacher added successfully');
                } else if (response.status === 400) {
                    response.text().then((error) => {
                        setErrorMessage(error);
                    });
                } else {
                    throw new Error('Error adding teacher');
                }
            })
            .catch((error) => {
                console.error('Error submitting teacher data:', error);
            });
    };

    return (
        <div>
            <br />
            <h1>Add Teacher</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Teacher ID:
                    <input
                        type="text"
                        value={teacherId}
                        onChange={(e) => setTeacherId(e.target.value)}
                        placeholder="DSE-"
                        required
                    />
                </label>
                <br />
                <label>
                    Teacher Name:
                    <input
                        type="text"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Designation:
                    <input
                        type="text"
                        value={designation}
                        onChange={(e) => setDesignation(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Teacher</button>
            </form>
        </div>
    );
}