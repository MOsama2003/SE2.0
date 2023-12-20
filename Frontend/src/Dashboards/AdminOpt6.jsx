import React, { useState } from 'react';

export default function StudentForm() {
    const [companyName, setCompanyName] = useState('');
    const [jobRole, setJobRole] = useState('');
    const [paymentStatus, setPaymentStatus] = useState('');
    const [url, setUrl] = useState('');
    const [lastDate, setLastDate] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();

        // Prepare the job/internship data to be sent to the server
        const jobData = {
            companyName: companyName,
            jobRole: jobRole,
            paymentStatus: paymentStatus,
            url: url,
            lastDate: lastDate,
        };

        // Make an API request to your server to add the job/internship
        fetch('http://localhost:5000/api/add-job', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(jobData),
        })
            .then((response) => {
                if (response.ok) {
                    // Reset the form fields
                    setCompanyName('');
                    setJobRole('');
                    setPaymentStatus('');
                    setUrl('');
                    setLastDate('');
                    setErrorMessage('');
                    alert('Job/Internship added successfully');
                } else {
                    throw new Error('Error adding job/internship');
                }
            })
            .catch((error) => {
                console.error('Error submitting job/internship data:', error);
            });
    };

    return (
        <div>
            <br />
            <h1>Add Job/Internship</h1>
            {errorMessage && <p>{errorMessage}</p>}
            <form onSubmit={handleSubmit}>
                <label>
                    Company Name:
                    <input
                        type="text"
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Job Role:
                    <input
                        type="text"
                        value={jobRole}
                        onChange={(e) => setJobRole(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Payment Status:
                    <input
                        type="text"
                        value={paymentStatus}
                        onChange={(e) => setPaymentStatus(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    URL:
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        required
                    />
                </label>
                <br />
                <label>
                    Last Date:
                    <input
                        type="text"
                        value={lastDate}
                        onChange={(e) => setLastDate(e.target.value)}
                        required
                    />
                </label>
                <br />
                <button type="submit">Add Job/Internship</button>
            </form>
        </div>
    );
}
