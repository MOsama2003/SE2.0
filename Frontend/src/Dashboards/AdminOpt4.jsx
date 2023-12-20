import React, { useEffect, useState } from 'react';

export default function OB4() {
    const [teachers, setTeachers] = useState([]);

    useEffect(() => {
        fetchTeachers();
    }, []);

    const fetchTeachers = () => {
        fetch('http://localhost:5000/api/teachers')
            .then((response) => response.json())
            .then((data) => {
                setTeachers(data);
            })
            .catch((error) => {
                console.error('Error fetching teachers:', error);
            });
    };

    return (
        <center>
            <br />
            <h1>Teachers</h1>
            <table>
                <thead>
                    <tr>
                        <th>Teacher ID</th>
                        <th>Teacher Name</th>
                        <th>Designation</th>
                    </tr>
                </thead>
                <tbody>
                    {teachers.map((teacher) => (
                        <tr key={teacher.teacher_id}>
                            <td>{teacher.teacher_id}</td>
                            <td>{teacher.teacher_name}</td>
                            <td>{teacher.designation}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
    );
}
