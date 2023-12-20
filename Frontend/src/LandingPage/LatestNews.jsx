import React, { useState, useRef, useEffect } from "react";
import NewsCard from "./NewsCard";
const LatestNews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const animationRef = useRef(null);
  const data = [
    {
        heading: 'FYP Catalog 2022',
headline: 'Lorem ipsum dolor sit ametLorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, illum!',
    }, {
        heading: 'Workshop on SQA',
headline: 'Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, illum!',
    }, {
        heading: 'Annual Dinner',
headline: 'Lorem ipsum dolor sit amet Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto, illum!',
    }
]
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

    return(
        <>
        <div className="container dr-msg">Latest News & Event</div>
        <br /><br /> <div
      className={`slide-up-animation  card-flex container ${isVisible ? "visible" : ""}`}
      ref={animationRef}
    >
            {data.map((item,index)=>{
                return(
                  <NewsCard key={index} heading={item.heading} headline={item.headline}></NewsCard>  
                );
            })}
        </div>
        </>
    )
}
export default LatestNews;