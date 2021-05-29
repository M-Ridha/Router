import React from 'react'
import './descrip.css';
import {Button}  from "react-bootstrap";

const Description = ({match,movies,history}) => {

    let moviesdec = movies.find(movie => movie.id === match.params.id)    

    return (
        <div className='desc '>
            
            <div className='navdesc' >

                <h1> Movie Description</h1>
                <Button variant="danger" onClick={()=>history.push('/')} >
                    Go Back
                </Button>
            
            </div>
            
            <div className='mdesc'>


                <div className='text' >

                    <h1>{moviesdec.title}</h1>
                    <div className='mov'> {moviesdec.description} </div> 


                </div>


                <div className='vid'>

                    <iframe  style={{ width: "550px", height:"350px" , borderRadius:"5px" }} className='video'
                        title='Youtube player'
                        src={moviesdec.trailerUrl}>
                    </iframe>

                </div>



            </div>
        </div>
    )
}

export default Description;
