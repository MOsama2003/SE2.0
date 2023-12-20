export default function NewsCard({ heading, headline }){
    return (
      <div className="cardd">
        <div>
        <h2>{heading}</h2>
        <p>{headline}</p>
        </div>
        <button className="btn">Read More</button>
      </div>
    );
  };
  