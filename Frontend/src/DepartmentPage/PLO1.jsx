import React, { useState, useRef, useEffect } from "react";
export default function PLO1(){
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
      className={`slide-up-animation container third-color ${isVisible ? "visible" : ""}`}
      ref={animationRef}
    >
        <div className="text-box second-color">
          <h1 className="text-length">Program Educational Objectives</h1>
          <br />
          <br />
          <p className="PLO-paragraph">
            A Software Engineering Graduate <br />
            <span className="PLO-count">1.</span> Performs his/her professional
            roles in Software industry and related fields{" "}
            <sup className="PLO-mapped">[PLO 1, 2, 3, 4, 5] </sup>
            <br />
            <span className="PLO-count">2.</span> Adheres to professional
            responsibilities in multi-cultural environment with continual
            improvement <sup className="PLO-mapped">[PLO 6, 7, 8, 12]</sup>
            <br /> <span className="PLO-count">3.</span> Works effectively as a
            team lead or a team member in challenging ventures{" "}
            <sup className="PLO-mapped"> [PLO 9, 11] </sup>
            <br />
            <span className="PLO-count">4.</span>
            Communicates technical and managerial information efficiently in
            oral and written forms{" "}
            <sup className="PLO-mapped">[PLO 1, 9, 10, 12]</sup>
          </p>
        </div>
      </div>
  );
}