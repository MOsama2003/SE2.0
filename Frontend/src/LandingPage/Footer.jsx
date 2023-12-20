import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import MarkunreadOutlinedIcon from "@mui/icons-material/MarkunreadOutlined";
import CallOutlinedIcon from "@mui/icons-material/CallOutlined";
import VisibilitySensor from 'react-visibility-sensor';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);
  const onVisibilityChange = (visible) => {
    setIsVisible(visible);
  };
  const navigate = useNavigate();
  const gotohome = () =>{
    navigate('/')
  }
  return (
     <VisibilitySensor onChange={onVisibilityChange} partialVisibility>
      {({ isVisible }) => (
          <footer className="footer">
            <br />
          <h2 className="footer-contact">CONTACT US</h2> 
          <br /> <br /> <br />     
          <div className={`slide-in-left div-footer ${isVisible ? 'slide-in-left-active' : ''}`}>
          <div className="details">
            
            <div className="address footer-grid">
              <LocationOnOutlinedIcon
                sx={{ fontSize: 70 }}
              ></LocationOnOutlinedIcon>
              <div className="vertical-line"></div>
              <div className="add">
                <div>Department of Software Engineering</div>
                <div>NED University of Engineering and Technology</div>
                <div>University Road Karachi - 75270</div>
              </div>
            </div>
            <br />
            <div className="contact footer-grid">
              <CallOutlinedIcon sx={{ fontSize: 50 }}></CallOutlinedIcon>
              <div className="vertical-line"></div>
              <div className="cont">
                <div>+92-21-99261261-68</div>
                <div>Ext: 2399</div>
                </div>
            </div>
            <br />
            <div className="e-mail footer-grid">
              <MarkunreadOutlinedIcon
                sx={{ fontSize: 50 }}
              ></MarkunreadOutlinedIcon>
              <div className="vertical-line"></div>
              <div className="email">cse@neduet.edu.pk</div>
            </div>
          </div>
          <div className="footer-logo">
            <button className="logo-btn" onClick={gotohome}><img
              src="https://upload.wikimedia.org/wikipedia/en/thumb/8/8b/NEDUET_logo.svg/200px-NEDUET_logo.svg.png"
              alt=""
            /></button>
          </div>
        </div>
        <br />
        <center>
          <hr style={{ width: "70vw" }} />
        </center>
        <br />
        <center>
          <div className="footer-content">
            &#169;2023 Department of Software Engineering, NedUET | CSIT
            building | University road, Karachi | Sindh | Pakistan{" "}
          </div>
        </center>
        </footer>)}</VisibilitySensor>
 );
}
   