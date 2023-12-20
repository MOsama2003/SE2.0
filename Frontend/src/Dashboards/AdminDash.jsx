import React from 'react';
import './Dash.css';
import { useNavigate, Link, Outlet } from 'react-router-dom';

function AdminDash() {
  const navigate = useNavigate();
  const LogOut = () => {
    const a = confirm("Do you want to Logout your Account?")
    if (a) {
      navigate('/Admin');
    }
  }
  return (
    <>
      <div className='sidebar-parent'>
        <div className="sidebar-container">
          <ul className="sidebar-menu">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <li>
              <Link to="/Admin/AdminDashboard/Option1" className="sidebar-link">
                View Students
              </Link>
            </li>
            <li>
              <Link to="/Admin/AdminDashboard/Option2" className="sidebar-link">
                Add Student
              </Link>
            </li>
            <li>
              <Link to="/Admin/AdminDashboard/Option3" className="sidebar-link">
                Update Data
              </Link>
            </li>
            <li>
              <Link to="/Admin/AdminDashboard/Option4" className="sidebar-link">
                View Teachers
              </Link>
            </li>
            <li>
              <Link to="/Admin/AdminDashboard/Option5" className="sidebar-link">
                Add Teacher
              </Link>
            </li>
            <li>
              <Link to="/Admin/AdminDashboard/Option6" className="sidebar-link">
                Add Opportunities
              </Link>
            </li>
          </ul>
          <button onClick={LogOut} className='LogOut'>Log Out</button>
        </div>
        <div className='div-section'>
          <section>
            Welcome To Admin's Portal</section>
          <Outlet /> </div></div></>
  );
}

export default AdminDash;
