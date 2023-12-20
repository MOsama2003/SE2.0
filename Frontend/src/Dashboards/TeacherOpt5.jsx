const monthNames = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
];

const month = new Date().getMonth();

const advanceSalaryMessage = () => {
    const currentDate = new Date();
    const day = currentDate.getDate();

    const monthName = monthNames[month];

    if (day <= 7) {
        return (
            <div>
                <h1>Advance Salary Message</h1>
                <p>
                    YOUR ADVANCE SALARY FOR THE MONTH OF <strong>{monthName}</strong> HAS NOT BEEN DISBURSED YET.
                    The salary will be disbursed in the week starting 8th of {monthName}.
                </p>
            </div>
        );
    } else {
        return (
            <center>
                <div>
                    <br />
                    <h1>SALARY STATUS</h1>
                    <p>YOUR ADVANCE SALARY FOR THE MONTH OF <strong>{monthName}</strong> HAS BEEN DISBURSED.</p>
                </div>
            </center>
        );
    }
};

const TeacherOpt5 = () => {
    return advanceSalaryMessage();
};

export default TeacherOpt5;
