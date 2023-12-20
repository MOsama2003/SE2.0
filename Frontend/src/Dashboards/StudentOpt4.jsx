import React from 'react';

export default function StudentOpt4() {
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth(); // 0-based index, January is 0, February is 1, etc.

    let message;

    if (currentMonth === 1 || currentMonth === 8) {
        // February (1) and September (8) are 0-based indexes
        message = "Your new semester's fees is due soon!";
    } else {
        message = "Your semester fees is paid.";
    }

    const shuttleNote = "Shuttle fees are to be paid by the 5th of each month.";

    return (
        <center>
            <>
            <br />
                <h1>Fee Status</h1>
                <p>{message}</p>
                <p>{shuttleNote}</p>
            </>
        </center>
    );
}
