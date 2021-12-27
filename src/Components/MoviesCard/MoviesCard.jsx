import React from "react";
import ReactStars from "react-rating-stars-component";

const MoviesCard = ({ movie }) => {
  return (
    <div className="my-list">
     
  
          <div>
            <img
              src={movie.poster}
              alt={`${movie.title} poster`}
              height={300}
              width={250}
            />
            <h5>{movie.title}</h5>
            <ReactStars
              count={5}
              size={24}
              value={movie.rating}
              isHalf={false}
              edit={false}
              activeColor="#ffd700"
            />
          </div>
       
      
    </div>
  );
};

export default MoviesCard;
