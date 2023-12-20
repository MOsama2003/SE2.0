import React, { useState } from 'react';
import female from '../assets/images.png'
import male from '../assets/download.png'
const TeacherCard = (props) => {
  const [isFlipped, setIsFlipped] = useState(false);

  const handleCardFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={`card ${isFlipped ? 'card-flipped' : ''}`} onMouseEnter={handleCardFlip} onMouseLeave={handleCardFlip}>
      <div className="card-front">
        <img className="Teacher-img" src={props.img} alt="Card Front" />
        <h2>{props.heading}</h2>
        <h4>{props.designation}</h4>
      </div>
      <div className="card-back">
        <p>{props.content}</p>
      </div>
    </div>
  );
};
TeacherCard.defaultProps = {
    img : male,
    heading : "Teacher",
    designation: "Professor",
    content : "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum in sed necessitatibus."
  }
  
export default TeacherCard;