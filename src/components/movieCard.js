import React from 'react'

export const MovieCard = ({ movieData, date, currentGenre }) => {
    return (
        <div className="movie-card">
            <div className="movie-poster"><img src={"https://image.tmdb.org/t/p/w185/" + movieData.poster_path} alt="poster"></img></div>
            <div className="movie-description">
                <h2>{movieData.title} ({date})</h2>
                <p className="movie-rating">Дата релиза: {movieData.release_date}; Рейтинг: {movieData.vote_average}</p>
                <p className="movie-genre"><div className="movie-genres">Жанр: {currentGenre.map(el => <span>{el}; </span>)}</div></p>
                <p>{movieData.overview}</p>
            </div>
        </div>
    )
}