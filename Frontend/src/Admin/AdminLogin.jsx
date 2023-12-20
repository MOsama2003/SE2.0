import React, { useState, useRef } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
function AdminLogin(props) {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const ref1 = useRef("");
  const ref2 = useRef("");
  const handleLogin = () => {
    if (username === 'admin' && password === 'admin') {
      ref1.current.value = ""
      ref2.current.value = ""
      console.log(ref1.current.value);
      navigate('/Admin/AdminDashboard');
    } else {
      alert('Invalid username or password');
    }
  };

  return (
    <>
      <div className={`gradient ${props.d ? 'none' : ''}`}>
        <center>
          <br />
          <br />
          <br />
          <br />
          <div className="login_form_container">
            <div 
            className="login_form">
              <h2 className="Admin-h2">Admin Panel</h2>
              <br />
              <div className="input_group">
                <i className="fa fa-user"></i>
                <input
                  type="text"
                  placeholder="Username"
                  className="input_text"
                  autoComplete="off"
                  ref={ref1}
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div 
              className="input_group"
              >
                <i className="fa fa-unlock-alt"></i>
                <input
                  type="password"
                  ref={ref2}
                  placeholder="Password"
                  className="input_text"
                  autoComplete="off"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="button_group" id="login_button">
                <button className='btn-adminlogin' onClick={handleLogin}>Login</button>
              </div>
            </div>
          </div>
        </center>
      </div>
      <Outlet />
    </>
  );
}

export default AdminLogin;
