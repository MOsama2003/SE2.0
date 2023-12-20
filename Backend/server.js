const express = require('express');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const cors = require('cors');
const http = require('http');
const socketIo = require('socket.io');

const app = express();
const port = 5000; // Choose a suitable port number

// Create a server instance
const server = http.createServer(app);

// Create a Socket.IO server instance
const io = socketIo(server);

// Middleware
app.use(express.json());
app.use(cors());

// Connect to the MySQL database
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "se_backend",
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to the database: ', err);
        return;
    }
    console.log('Connected to the database');
});

// WebSocket connection handler
io.on('connection', (socket) => {
    console.log('A client connected');

    // Handle incoming messages
    socket.on('message', (message) => {
        console.log('Received message:', message);

        // Process the message and perform any necessary database operations

        // Send a response back to the client
        socket.emit('message', 'Message received');
    });

    // Handle disconnect event
    socket.on('disconnect', () => {
        console.log('A client disconnected');
    });
});

// Student Login API endpoint
app.post('/api/student-login', (req, res) => {
    const { login_id, password } = req.body;

    // Check if the user exists in the database
    connection.query(
        'SELECT * FROM student_portal_logins WHERE login_id = ?',
        [login_id],
        (err, results) => {
            if (err) {
                console.error('Error executing the database query: ', err);
                res.status(500).json({ message: 'Internal server error' });
                return;
            }

            if (results.length === 0 || results[0].password !== password) {
                // Invalid username or password
                res.status(401).json({ message: 'Invalid username or password' });
                return;
            }

            // User authenticated successfully
            const studentId = results[0].student_id;

            // Send the studentId in the response
            res.json({ message: 'Login successful', studentId });
        }
    );
});


// Teacher Login API endpoint
app.post('/api/teacher-login', (req, res) => {
    const { login_id, password } = req.body;

    // Check if the user exists in the database
    connection.query('SELECT * FROM teacher_portal_logins WHERE login_id = ?', [login_id], (err, results) => {
        if (err) {
            console.error('Error executing the database query: ', err);
            res.sendStatus(500);
            return;
        }

        if (results.length === 0 || results[0].password !== password) {
            // Invalid username or password
            res.status(401).json({ message: 'Invalid username or password' });
            return;
        }

        // User authenticated successfully
        const teacherId = results[0].teacher_id;
        res.json({ message: 'Login successful', teacherId });
        console.log(teacherId);
    });
});


// Fetch career opportunities API endpoint
app.get('/api/career-opportunities', (req, res) => {
    // Query the career_opportunities table in the database
    connection.query('SELECT * FROM career_opportunities', (err, results) => {
        if (err) {
            console.error('Error executing the database query: ', err);
            res.sendStatus(500);
            return;
        }

        // Send the career opportunities data as a JSON response
        res.json(results);
        console.log(results);
    });
});

// Fetch courses taught by a teacher API endpoint
app.get('/api/teacher-courses', (req, res) => {
    const teacherId = req.query.teacherId;

    connection.query(
        `SELECT * FROM courses WHERE teacher_id = ?`,
        [teacherId],
        (error, results) => {
            if (error) {
                console.error('Error fetching teacher courses:', error);
                res.status(500).json({ message: 'An error occurred while fetching teacher courses.' });
            } else {
                res.status(200).json(results);
            }
        }
    );
});

// Fetch students enrolled API endpoint
app.get('/api/students-enrolled', (req, res) => {
    // Query the students_enrolled table in the database
    connection.query('SELECT * FROM students_enrolled', (err, results) => {
        if (err) {
            console.error('Error executing the database query: ', err);
            res.sendStatus(500);
            return;
        }

        // Send the students enrolled data as a JSON response
        res.send(results);
    });
});

// API endpoint for adding a student
app.post('/api/add-student', (req, res) => {
    const { studentId, studentName, fatherName, batchId, section } = req.body;

    // Check if the student ID already exists in the database
    connection.query(
        'SELECT * FROM students_enrolled WHERE student_id = ?',
        [studentId],
        (err, results) => {
            if (err) {
                console.error('Error querying student data: ', err);
                res.sendStatus(500);
                return;
            }

            if (results.length > 0) {
                // The student ID already exists, send an error response
                res.status(400).send('Student ID already exists');
            } else {
                // Insert the student data into the students_enrolled table
                connection.query(
                    'INSERT INTO students_enrolled (student_id, student_name, father_name, batch_id, section) VALUES (?, ?, ?, ?, ?)',
                    [studentId, studentName, fatherName, batchId, section],
                    (err, results) => {
                        if (err) {
                            console.error('Error inserting student data: ', err);
                            res.sendStatus(500);
                            return;
                        }

                        // Send a success response
                        res.sendStatus(200);
                    }
                );
            }
        }
    );
});

// Handle PUT request to update student data
app.put('/api/update-student/:studentId', (req, res) => {
    const studentId = req.params.studentId;
    const updatedData = req.body;

    // Update the student data in the database
    connection.query(
        'UPDATE students_enrolled SET student_name = ?, father_name = ?, batch_id = ?, section = ? WHERE student_id = ?',
        [updatedData.student_name, updatedData.father_name, updatedData.batch_id, updatedData.section, studentId],
        (error, results) => {
            if (error) {
                console.error('Error updating student data:', error);
                res.status(500).send('An error occurred while updating student data.');
            } else {
                console.log('Student data updated:', results);
                res.status(200).json({ message: 'Student data updated successfully.' });

                // Emit a socket event to notify clients about the updated data
                io.emit('studentDataUpdated', { studentId, updatedData });
            }
        }
    );
});

// Fetch teachers API endpoint
app.get('/api/teachers', (req, res) => {
    // Query the teachers table in the database
    connection.query('SELECT * FROM teachers', (err, results) => {
        if (err) {
            console.error('Error executing the database query: ', err);
            res.sendStatus(500);
            return;
        }

        // Send the teachers data as a JSON response
        res.json(results);
    });
});

// API endpoint for adding a teacher
app.post('/api/add-teacher', (req, res) => {
    const { teacherId, teacherName, designation } = req.body;

    // Check if the teacher ID already exists in the database
    connection.query(
        'SELECT * FROM teachers WHERE teacher_id = ?',
        [teacherId],
        (err, results) => {
            if (err) {
                console.error('Error querying teacher data: ', err);
                res.sendStatus(500);
                return;
            }

            if (results.length > 0) {
                // The teacher ID already exists, send an error response
                res.status(400).send('Teacher ID already exists');
            } else {
                // Insert the teacher data into the teachers table
                connection.query(
                    'INSERT INTO teachers (teacher_id, teacher_name, designation) VALUES (?, ?, ?)',
                    [teacherId, teacherName, designation],
                    (err, results) => {
                        if (err) {
                            console.error('Error inserting teacher data: ', err);
                            res.sendStatus(500);
                            return;
                        }

                        // Send a success response
                        res.sendStatus(200);

                        // Emit a socket.io event to inform clients about the new teacher addition
                        io.emit('teacherAdded', { teacherId, teacherName, designation });
                    }
                );
            }
        }
    );
});

// Defined a route to handle the API request for fetching students by teacherId
app.get('/api/teacher-courses/:teacherId/students', (req, res) => {
    const teacherId = req.params.teacherId;

    connection.query(
        `SELECT students_enrolled.student_id, students_enrolled.student_name, courses.course_code, courses.course_name FROM students_enrolled INNER JOIN students_enrolled_courses ON students_enrolled.student_id = students_enrolled_courses.student_id INNER JOIN courses ON students_enrolled_courses.course_code = courses.course_code WHERE courses.teacher_id = ?`,
        [teacherId],
        (error, results) => {
            if (error) {
                console.error('Error fetching students:', error);
                res.status(500).json({ message: 'An error occurred while fetching students.' });
            } else {
                res.status(200).json(results);
            }
        }
    );
});

// API endpoint for updating attendance count
app.post('/api/update-attendance-count', async (req, res) => {
    const { studentId, courseCode } = req.body;

    // Get the current attendance count and the student ID and course code for the record
    const getCurrentAttendanceCount = () => {
        return new Promise((resolve, reject) => {
            connection.query(
                'SELECT classes_attended FROM attendance WHERE student_id = ? AND course_code = ?',
                [studentId, courseCode],
                (error, results) => {
                    if (error) {
                        reject(error);
                    } else {
                        if (results.length === 0) {
                            // If the record doesn't exist, initialize the attendance count to zero
                            resolve(0);
                        } else {
                            resolve(results[0].classes_attended);
                        }
                    }
                }
            );
        });
    };

    // Update the attendance count and send the response
    const updateAttendanceCount = async () => {
        try {
            const currentAttendanceCount = await getCurrentAttendanceCount();
            const newAttendanceCount = currentAttendanceCount + 1;

            connection.query(
                'INSERT INTO attendance (student_id, course_code, attendance_date, classes_attended, total_classes) VALUES (?, ?, CURDATE(), ?, 38) ON DUPLICATE KEY UPDATE classes_attended = ?',
                [studentId, courseCode, newAttendanceCount, newAttendanceCount],
                (error) => {
                    if (error) {
                        console.error('Error updating attendance count:', error);
                        res.status(500).json({ message: 'An error occurred while updating attendance count.' });
                    } else {
                        const updatedRecord = {
                            classes_attended: newAttendanceCount,
                            student_id: studentId,
                            course_code: courseCode,
                        };
                        res.status(200).json({ message: 'Attendance count updated successfully.', record: updatedRecord });
                    }
                }
            );
        } catch (error) {
            console.error('Error fetching current attendance count:', error);
            res.status(500).json({ message: 'An error occurred while fetching current attendance count.' });
        }
    };

    // Call the function to update the attendance count
    updateAttendanceCount();
});

// API endpoint for submitting attendance
app.post('/api/submit-attendance', async (req, res) => {
    const attendanceData = req.body.attendance;

    try {
        for (const attendance of attendanceData) {
            const { studentId, courseCode, attendanceStatus } = attendance;
            const classesAttendedIncrement = attendanceStatus === 'Present' ? 1 : 0;

            // Check if the record already exists in the attendance table for the student and course
            const existingRecord = await getAttendanceRecord(studentId, courseCode);

            if (existingRecord) {
                // If the record exists, update the classes_attended value by incrementing it
                const updatedClassesAttended = existingRecord.classes_attended + classesAttendedIncrement;

                // Update the attendance record with the new classes_attended value
                await updateAttendanceRecord(studentId, courseCode, updatedClassesAttended);
            } else {
                // If the record does not exist, insert a new attendance record
                await insertAttendanceRecord(studentId, courseCode, classesAttendedIncrement);
            }
        }

        res.status(200).json({ message: 'Attendance submitted successfully.' });
    } catch (error) {
        console.error('Error submitting attendance:', error);
        res.status(500).json({ message: 'An error occurred while submitting attendance.' });
    }
});

// Function to get the existing attendance record for a student and course
const getAttendanceRecord = (studentId, courseCode) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'SELECT classes_attended FROM attendance WHERE student_id = ? AND course_code = ?',
            [studentId, courseCode],
            (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    if (results.length === 0) {
                        resolve(null); // Record does not exist
                    } else {
                        resolve(results[0]);
                    }
                }
            }
        );
    });
};

// Function to update the attendance record with the new classes_attended value
const updateAttendanceRecord = (studentId, courseCode, classesAttended) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'UPDATE attendance SET classes_attended = ? WHERE student_id = ? AND course_code = ?',
            [classesAttended, studentId, courseCode],
            (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            }
        );
    });
};

// Function to insert a new attendance record
const insertAttendanceRecord = (studentId, courseCode, classesAttended) => {
    return new Promise((resolve, reject) => {
        connection.query(
            'INSERT INTO attendance (student_id, course_code, attendance_date, classes_attended, total_classes) VALUES (?, ?, CURDATE(), ?, 38)',
            [studentId, courseCode, classesAttended],
            (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve();
                }
            }
        );
    });
};

// API endpoint for fetching attendance data for each (course code, student ID) composite key
app.get('/api/attendance-data', (req, res) => {
    const { student_id } = req.query;
    console.log('Requested student ID:', student_id);


    // Write the SQL query to fetch the attendance data
    const query =
        'SELECT course_code, classes_attended, total_classes FROM attendance WHERE student_id = ?';

    // Execute the query
    connection.query(query, [student_id], (error, results) => {
        if (error) {
            console.error('Error fetching attendance data:', error);
            res.status(500).json({ message: 'An error occurred while fetching attendance data.' });
        } else {
            console.log('Attendance data:', results);
            res.status(200).json(results);
        }
    });
});

// Define the route handler for POST /api /marks
app.post('/api/store-marks', (req, res) => {
    const marksData = req.body;

    const sql = 'INSERT INTO marks (student_id, course_code, quiz, assignment, midterm, final_exam, obtainedMarks, percentage) VALUES (?, ?, ?, ?, ?, ?, ?, ?) ON DUPLICATE KEY UPDATE quiz = VALUES(quiz), assignment = VALUES(assignment), midterm = VALUES(midterm), final_exam = VALUES(final_exam), obtainedMarks = VALUES(obtainedMarks), percentage = VALUES(percentage)';

    marksData.forEach((mark) => {
        const { student_id, course_code, quiz, assignment, midterm, final_exam, obtainedMarks, percentage } = mark;
        const values = [
            student_id,
            course_code,
            quiz,
            assignment,
            midterm,
            final_exam,
            obtainedMarks,
            percentage,
        ];

        connection.query(sql, values, (error, results) => {
            if (error) {
                console.error('Error storing marks:', error);
            } else {
                console.log('Marks stored:', results);
            }
        });
    });

    res.status(200).json({ message: 'Marks stored successfully' });
});


// Define the route to handle the marks submission
app.post('/api/submit-marks', (req, res) => {
    const marksData = req.body;

    // Prepare the SQL query to update marks in the database
    const sql =
        'UPDATE marks SET final_exam = ?, midterm = ?, quiz = ?, assignment = ? WHERE student_id = ? AND course_code = ?';

    // Create an array of promises for each query
    const updatePromises = marksData.map((mark) => {
        const { studentId, courseCode, finalExam, midterm, quiz, assignment } = mark;
        const values = [finalExam, midterm, quiz, assignment, studentId, courseCode];

        return new Promise((resolve, reject) => {
            connection.query(sql, values, (error, results) => {
                if (error) {
                    console.error('Error updating marks:', error);
                    reject(error);
                } else {
                    console.log('Update result:', results);
                    resolve(results);
                }
            });
        });
    });

    // Execute all the promises
    Promise.all(updatePromises)
        .then(() => {
            res.status(200).json({ message: 'Marks submitted successfully.' });
        })
        .catch((error) => {
            console.error('Error updating marks:', error);
            res.status(500).json({ message: 'Error updating marks.' });
        });
});

// API endpoint for adding a job/internship
app.post('/api/add-job', (req, res) => {
    const { companyName, jobRole, paymentStatus, url, lastDate } = req.body;

    // Insert the job/internship data into the career_opportunities table
    connection.query(
        'INSERT INTO career_opportunities (company_name, job_role, payment_status, url, last_date) VALUES (?, ?, ?, ?, ?)',
        [companyName, jobRole, paymentStatus, url, lastDate],
        (err, results) => {
            if (err) {
                console.error('Error inserting job/internship data: ', err);
                res.sendStatus(500);
                return;
            }

            // Send a success response
            res.sendStatus(200);
            console.log(results);
        }
    );
});

app.post('/api/submit-marks', (req, res) => {
    const marksData = req.body;

    // Prepare the SQL query to update marks in the database
    const sql =
        'UPDATE marks SET final_exam = ?, midterm = ?, quiz = ?, assignment = ? WHERE student_id = ? AND course_code = ?';

    // Create an array of promises for each query
    const updatePromises = marksData.map((mark) => {
        const { studentId, courseCode, finalExam, midterm, quiz, assignment } = mark;
        const values = [finalExam, midterm, quiz, assignment, studentId, courseCode];

        return new Promise((resolve, reject) => {
            connection.query(sql, values, (error, results) => {
                if (error) {
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });
    });

    // Execute all the promises
    Promise.all(updatePromises)
        .then(() => {
            res.status(200).json({ message: 'Marks submitted successfully.' });
        })
        .catch((error) => {
            console.error('Error updating marks:', error);
            res.status(500).json({ message: 'Error updating marks.' });
        });
});

// Fetch enrolled courses by student ID API endpoint
app.get('/api/students-enrolled-courses/:studentId', (req, res) => {
    const studentId = req.params.studentId;

    // Query the student_enrolled_courses table in the database
    connection.query(
        'SELECT course_code, course_name FROM students_enrolled_courses WHERE student_id = ?',
        [studentId],
        (err, results) => {
            if (err) {
                console.error('Error executing the database query: ', err);
                res.sendStatus(500);
                return;
            }

            // Send the enrolled courses data as a JSON response
            res.json(results);
        }
    );
});

// Retrieve marks for a specific student
app.get('/api/marks/:studentId', (req, res) => {
    const { studentId } = req.params;

    // Use parameterized query to avoid SQL injection
    const sql = 'SELECT course_code, final_exam, midterm, quiz, assignment, total_marks, obtainedMarks, percentage FROM marks WHERE student_id = ?';

    connection.query(sql, [studentId], (error, results) => {
        if (error) {
            console.error('Error executing the query:', error);
            res.status(500).json({ error: 'Failed to fetch marks' });
        } else {
            res.json(results);
        }
    });
});

// Start the server
server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});