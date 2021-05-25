import React from 'react';
import MovieCard from './Mcard';


const MovieList = ({movies}) => {
    return (
        
        <>
            {movies.map((movie,i)=><MovieCard key={i} MCard={movie}/>)}
        </>
    )
}

export default MovieList;