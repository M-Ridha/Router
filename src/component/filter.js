import React from 'react';
import '../App.css';
import StarRatingComponent from 'react-star-rating-component';


const Filter = ({search,handleRating}) => {
    
    return (
        
        <div className='movie-list'  style={{display: "flex"}} >
            <input  style={{margin:10, borderRadius:15 , borderStyle:"none" ,textAlign:" center"}} placeholder="search" type="text" onChange={(e)=>search(e.target.value) }/>
            <div style={{fontSize:30 , marginRight:30 , marginTop:15}}>
                <StarRatingComponent name="filterRating"
                    starCount={5}
                    onStarClick={(value)=>handleRating(value)}
                />
            </div>
        </div>
    )
}



export default Filter ;