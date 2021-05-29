import React from 'react';
import MovieCard from './Mcard';
import '../App.css';



const MovieList = ({ movies}) => {
  return (
    <>
      {movies.map((el,i) => (
        <MovieCard key={i} movie={el} />
        )
      )}
      
    </>    
    
  );
};

export default MovieList;