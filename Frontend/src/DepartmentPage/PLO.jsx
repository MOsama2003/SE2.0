import React, { useState, useRef, useEffect } from "react";
export default function PLO(){
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
        <div className="text-box con second-color">
          <h1 className="text-length">Program Learning Outcomes</h1>
          <br />
          <br />
          <div className="PLO-grid">
           <div className="grid-item1"><span className="itemA">1.</span><span className="itemB"> Engineering Knowledge: </span> An ability to apply knowledge of mathematics, science, engineering fundamentals and an engineering specialization to the solution of complex engineering problems.</div>
           <div className="grid-item2"><span className="itemA">2. </span><span className="itemB">Problem Analysis: </span>An ability to identify, formulate, research literature, and analyze complex engineering problems reaching substantiated conclusions using first principles of mathematics, natural sciences and engineering sciences.</div>
           <div className="grid-item3"><span className="itemA">3. </span><span className="itemB">Design / Development of Solutions:</span> An ability to design solutions for complex engineering problems and design systems, components or processes that meet specified needs with appropriate consideration for public health and safety, cultural, societal, and environmental considerations.</div>
           <div className="grid-item4"><span className="itemA">4. </span><span className="itemB">Investigation: </span>An ability to investigate complex engineering problems in a methodical way including literature survey, design and conduct of experiments, analysis and interpretation of experimental data, and synthesis of information to derive valid conclusions.</div>
           <div className="grid-item5"><span className="itemA">5. </span><span className="itemB">Modern Tool Usage: </span>An ability to create, select and apply appropriate techniques, resources, and modern engineering and IT tools, including prediction and modeling, to complex engineering activities, with an understanding of the limitations.</div>
           <div className="grid-item6"><span className="itemA">6. </span><span className="itemB">The Engineer and Society:</span>An ability to apply reasoning informed by contextual knowledge to assess societal, health, safety, legal and cultural issues and the consequent responsibilities relevant to professional engineering practice and solution to complex engineering problems.</div>
           <div className="grid-item7"><span className="itemA">7. </span><span className="itemB">Environment and Sustainability:</span>An ability to understand the impact of professional engineering solutions in societal and environmental contexts and demonstrate knowledge of and need for sustainable development.</div>
           <div className="grid-item8"><span className="itemA">8. </span><span className="itemB">Ethics: </span>Apply ethical principles and commit to professional ethics and responsibilities and norms of engineering practice.</div>
           <div className="grid-item9"><span className="itemA">9. </span><span className="itemB">Individual and Teamwork:</span>An ability to work effectively, as an individual or in a team, on multifaceted and /or multidisciplinary settings.</div>
           <div className="grid-itemA0"><span className="itemA">10. </span><span className="itemB"> Communication: </span>An ability to communicate effectively, orally as well as in writing, on complex engineering activities with the engineering community and with society at large, such as being able to comprehend and write effective reports and design documentation, make effective presentations, and give and receive clear instructions.</div>
           <div className="grid-itemA1"><span className="itemA">11. </span><span className="itemB"> Project Management: </span> An ability to demonstrate management skills and apply engineering principles to one's own work, as a member and/or leader in a team, to manage projects in a multidisciplinary environment.</div>
           <div className="grid-itemA2"><span className="itemA">12. </span><span className="itemB"> Lifelong Learning:</span> An ability to recognize importance of and pursue lifelong learning in the broader context of innovation and technological developments.</div>
       
          </div>
        </div>
      </div>
  );
}