import React, { useState, useRef, useEffect } from "react";
const AlumniGrid = () => {
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
    <>
      <div className="container dr-msg">ALUMNI CORNER ft. Batch-18</div>
      <br /><br /><br />
      <div
        className={`slide-up-animation container grid-pic ${
          isVisible ? "visible" : ""
        }`}
        ref={animationRef}
      >
        <div className="grid-item item1"></div>
        <div className="grid-item item2"></div>
        <div className="grid-item item3"></div>
        <div className="grid-item item4"></div>
        <div className="grid-item item5"></div>
        <div className="grid-item item6"></div>
        <div className="grid-item item7"></div>
        <div className="grid-item item8"></div>
        <div className="grid-item item9"></div>
        <div className="item10"></div>
      </div>
      <br /><br /><br />
    </>
  );
};

export default AlumniGrid;