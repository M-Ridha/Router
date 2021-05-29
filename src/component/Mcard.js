import React from 'react';
import PropTypes from 'prop-types';
import { Card, Button } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from 'react-router-dom';

const MovieCard = ({ movie }) => {
    return (

        <Card className="card" style={{ width: '18rem' }}>

            <Card.Img variant="top" src={movie.Poster} style={{ height: "320px", width: '285px' }} />

            <Card.Body>

                <Card.Title> {movie.title} </Card.Title>
                <Card.Text> {movie.description} </Card.Text>
                <Card.Text style={{ fontWeight: "bold" }} >
                    {movie.year}
                </Card.Text>


                <StarRatingComponent
                    value={movie.rating}
                    name={`str${movie.id}`} editing={false}>

                </StarRatingComponent>

                <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }} >
                    
                    <Link to={`/Test/${movie.id}`} style={{ textDecoration: 'none' }} >
                        <Button variant="success" size="lg"> Details </Button>
                    </Link>
                    
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
