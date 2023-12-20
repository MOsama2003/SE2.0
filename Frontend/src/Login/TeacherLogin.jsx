import { Link, Outlet, useNavigate } from "react-router-dom";
import { useRef } from 'react';
const TeacherLogin = (props) => {
  const navigate = useNavigate();
  const ref1 = useRef("")
  const ref2 = useRef("")
  const HomePage = () => {
    navigate('/')
  }
  const Login = async () => {
    const login_id = ref1.current.value;
    const password = ref2.current.value;

    try {
      const response = await fetch('http://localhost:5000/api/teacher-login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ login_id, password }),
      });

      const data = await response.json();

      if (response.status === 200) {
        // Login successful
        localStorage.setItem('teacherId', data.teacherId); // Save the teacher ID to local storage
        navigate("/Login/Dashboard");
      } else {
        // Login failed
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
      alert('An error occurred during login');
    }
  };
  return (
    <> <div className={`std-body ${props.b ? "none" : ""}`}>
      <button className='HomePageBtn' onClick={HomePage}><i className="bx bx-home-alt"></i></button>  <br />
      <div className={`box-form ${props.b ? "none" : ""}`}>
        <div className={`left`}>
          <div className="overlay">
            <h1>Welcome to Teacher Portal</h1>
          </div>
        </div>
        <div className={`right `}>
          <h5>Login</h5>
          <div className="inputs">
            <input ref={ref1} type="text" placeholder="Teacher ID" />
            <br />
            <input ref={ref2} type="password" placeholder="Password" />
          </div>

          <div className='login-btn'><button onClick={Login}><Link className="Login-Link" to="">Login</Link></button>
            <br /><br />
            <p>Want to Login as a <Link to="/Login/Student">Student</Link></p></div>
        </div>

      </div></div><Outlet /></>
  );
};

export default TeacherLogin;
