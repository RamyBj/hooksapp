import React from "react";
import MoviesCard from "../MoviesCard/MoviesCard";

import "./MoviesList.css";

const MoviesList = ({ movies ,ratingSearch, titleSearch}) => {
  return (
    <div className="my-list">
  
    {
      movies
      .filter(movie=>movie.title.toLowerCase().includes(titleSearch) && movie.rating >= ratingSearch)
      .map((movie , index)=><MoviesCard movie={movie} key={index}/> )
    }
    </div>

  
  )};

export default MoviesList;



