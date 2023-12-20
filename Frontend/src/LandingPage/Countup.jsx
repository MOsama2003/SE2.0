import React, { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
const Countup = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      });
    });

    observer.observe(animationRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);
  return (
    <div className={`slide-up-animation container ${isVisible ? "visible" : ""}`}
    ref={animationRef}>
      <div className="flex-countup text-box">
      <div className="count1">
        <div className="std"></div>
      <h6>Students</h6>
     <CountUp className="count" end={500} duration="15" />+
      </div>
      <div className="count2">
        <div className="staff"></div>
        <h6>Staff</h6> <CountUp className="count" end={100} duration="15" />+
      </div>
      <div className="count3">
        <div className="alumni"></div>
        <h6>Alumni</h6> <CountUp className="count" end={10000} duration="15" />+
      </div>
    </div></div>
  );
};

export default Countup;