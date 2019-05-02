import React from 'react'
import { Link } from 'react-router-dom'

export const PopularComponent = ({ popular, genreFunction, handleAddFavourite, handleRemoveFavourite }) => {
    return (
        <>
            <div className="popular">{popular.map(res =>
                <div className="popular-card">
                    <div><img src={"https://image.tmdb.org/t/p/w185/" + res.poster_path} alt="poster"></img></div>
                    <div className="popular-card__description">
                        <div><h2>{res.title}</h2>
                            <p className="popular-date">Дата релиза: {res.release_date}; Рейтинг: {res.vote_average}</p>
                            <p className="popular-genre">Жанр: {res.genre_ids.map(el => genreFunction(el))}</p>
                            <p>{res.overview}...</p></div>
                        <div>
                            <button className="popular__read-button">
                                <Link to={`/movie/${res.id}`} className="movie-link">Подробнее</Link>
                            </button>
                            <button onClick={localStorage.getItem(res.id) ? handleRemoveFavourite : handleAddFavourite} id={res.id} className="popular__favourite-button">{localStorage.getItem(res.id) ? "Убрать" : "В избранное"}</button>
                        </div>
                    </div>
                </div>
            )}</div>
        </>
    )
}