import React, { useEffect, useState } from 'react';
import './Dash.css';
import { useNavigate, Link, Outlet } from 'react-router-dom';

function TeacherDash() {
  const navigate = useNavigate();
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchTeacherCourses();
  }, []);

  const fetchTeacherCourses = () => {
    // Fetch the courses assigned to the teacher
    fetch('http://localhost:5000/api/teacher-courses')
      .then((response) => response.json())
      .then((data) => {
        setCourses(data);
      })
      .catch((error) => {
        console.error('Error fetching teacher courses:', error);
      });
  };

  const LogOut = () => {
    const a = confirm('Do you want to Log Out your Account?');
    if (a) {
      navigate('/Login');
    }
  };

  return (
    <>
      <div className="sidebar-parent">
        <div className="sidebar-container">
          <ul className="sidebar-menu">
            <li>
              <br />
              <br />
              <br />
              <br />
              <br />
              <br />
              <Link to="/Login/Dashboard/Option1" className="sidebar-link">
                View Courses
              </Link>
            </li>
            <li>
              <Link to="/Login/Dashboard/Option2" className="sidebar-link">
                View Students
              </Link>
            </li>
            <li>
              <Link to="/Login/Dashboard/Option3" className="sidebar-link">
                Mark Attendance
              </Link>
            </li>
            <li>
              <Link to="/Login/Dashboard/Option4" className="sidebar-link">
                Update Marks
              </Link>
            </li>
            <li>
              <Link to="/Login/Dashboard/Option5" className="sidebar-link">
                Salary Status
              </Link>
            </li>
          </ul>
          <button onClick={LogOut} className="LogOut">
            Log Out
          </button>
        </div>
        <div className="div-section">
          <section>Welcome To Teacher's Portal</section>
          <Outlet courses={courses} />
        </div>
      </div>
    </>
  );
}

export default TeacherDash;