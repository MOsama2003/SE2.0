import { useState } from "react";
export default function StdTable(props) {
    const [isFlipped, setIsFlipped] = useState(false);

    const handleCardFlip = () => {
      setIsFlipped(!isFlipped);
    };
  return (
    <><div
              className={`card std-card ${isFlipped ? "card-flipped" : ""}`}
              onMouseEnter={handleCardFlip}
              onMouseLeave={handleCardFlip}
            >
              <div className="card-front">
                <img
                  className="StdAchievement-img"
                  src={props.img}
                  alt="Card Front"
                /> <br /> <br />
                <h4>{props.Headline}</h4>
              </div>
              <div className="card-back">
                <p>{props.content}</p>
              </div>
            </div>
            </>
          );
}
