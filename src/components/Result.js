import React from 'react';
import '../App.css';
import FadeIn from 'react-fade-in';


const Result = (props) => {
    const movieDetails = props.movie
    return (
        <FadeIn>
        <div className="App App-header">
            <div className="bg-image-result"></div>
            <div className="result-container">
                <img src={movieDetails.Poster} className="result-image" />
                <h1>{movieDetails.Title}</h1>
                <p>{movieDetails.Plot}</p>
                <span>Year: {movieDetails.Year}</span>
                <span>IMDB Rating: {movieDetails.imdbRating}</span>
            </div>        

        </div>
    </FadeIn>
    )
}

export default Result