import React from 'react';
import './Dash.css';
import { useNavigate, Link, Outlet } from 'react-router-dom';

function StudentDash() {
  const navigate = useNavigate();
  const LogOut = () => {
    const a = confirm("Do you want to Logout your Account?")
    if (a) {
      navigate('/Login/Student');
    }
  }
  return (<><div className='sidebar-parent'>
    <div className="sidebar-container">
      <ul className="sidebar-menu">
        <br /><br /><br /><br /><br />
        <li>
          <Link to="/Login/Student/Dashboard/Option1" className="sidebar-link">
            View Courses
          </Link>
        </li>
        <li>
          <Link to="/Login/Student/Dashboard/Option2" className="sidebar-link">
            Check Attendance
          </Link>
        </li>
        <li>
          <Link to="/Login/Student/Dashboard/Option3" className="sidebar-link">
            View Marks
          </Link>
        </li>
        <li>
          <Link to="/Login/Student/Dashboard/Option4" className="sidebar-link">
            Fees Status
          </Link>
        </li>
        <li>
          <Link to="/Login/Student/Dashboard/Option5" className="sidebar-link">
            Feedback Form
          </Link>
        </li>
      </ul>
      <button onClick={LogOut} className='LogOut'>Log Out</button>
    </div>
    <div className='div-section'>
      <section>
        Welcome To Student's Portal</section>
      <Outlet /> </div></div></>
  );
}

export default StudentDash;
