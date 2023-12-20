import React, { useState, useRef, useEffect } from "react";
const Vision = (props) => {
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
    <div
      className={`slide-up-animation ${props.bool ? "third-color" : ""} container ${isVisible ? "visible" : ""}`}
      ref={animationRef}
    >
      <div className={`text-box ${props.bool ? "second-color" : ""}  `}>
        <h3 className={`text-boxh3 ${ props.bool ? "text-length" : ""}`}>{props.heading}</h3>
        <br />
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Vision;