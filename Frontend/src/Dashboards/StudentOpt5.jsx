import React from 'react';

export default function StudentOpt5() {
    return (
        <center>
            <>
                <br />
                <h1>Feedback Form</h1>
                <button style={buttonStyle} onClick={() => {
                    window.open('https://www.example.com');
                }}>Fill Now</button>
            </>
        </center>
    );
}

const buttonStyle = {
    padding: '10px 20px',
    backgroundColor: '#4CAF50',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
    boxShadow: '0 0 5px rgba(0, 0, 0, 0.2)',
    width: '200px',
};