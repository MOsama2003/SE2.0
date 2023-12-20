import React, { useState, useRef, useEffect } from "react";
export default function PLOImages(props){
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
  // style={{background: " rgb(167,167,170)",
  //     background: "linear-gradient(90deg, rgba(167,167,170,1) 0%, rgba(254,254,254,0.8519782913165266) 64%, rgba(84,86,87,1) 100%)",
  //     border: "none" }}
  return (
    <div
      className={`slide-up-animation container third-color ${isVisible ? "visible" : ""}`}
      ref={animationRef}
    >
        <div>
          <h1 className="text-length">{props.heading}</h1>
          <br />
          <br />
         <img className="PLO-images" src={props.imagesrc}/>
        </div>
      </div>
  );
}