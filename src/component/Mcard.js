import React from 'react';
import PropTypes from 'prop-types';
import {Card,Button}  from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';


const MovieCard = ({MCard}) => {
    return (
        <Card className="card" style={{ width: '18rem' }}>
            
            <Card.Img variant="top" src={MCard.Poster}  style={{ height: "320px", width:'285px'}} />

            <Card.Body>
                
                <Card.Title> {MCard.title} </Card.Title>
                <Card.Text> {MCard.description} </Card.Text>
                <Card.Text style={{fontWeight:"bold"}} >
                    {MCard.year}
                </Card.Text>
                
                
                <StarRatingComponent 
                    value={MCard.rating}
                    name={`str${MCard.id}`} editing={false}>

                </StarRatingComponent>
                
                <div style={{display:"flex", flexDirection:"row", justifyContent:"space-around"  }} >
                    <Button variant="success" size="lg"> Watch </Button>
                    <Button variant="warning" size="lg"> Download </Button>
                </div>
            
            </Card.Body>
        
        </Card>
    );
}  

MovieCard.defaultProps = {
    card: {}
};

MovieCard.propTypes = {
    Card  : PropTypes.object 
};

export default MovieCard;
