import React from "react";
import "./favourite.css";
import { Link } from "react-router-dom";

export const FavouriteComponent = ({ movies, handleRemoveFavourite }) => {
    return (
        <>
            <div className="popular">
                {movies.map(res => (
                    <div className="popular-card">
                        <div>
                            <img
                                src={"https://image.tmdb.org/t/p/w185/" + res.poster_path}
                                alt="poster"
                            />
                        </div>
                        <div className="popular-card__description">
                            <div>
                                <h2>{res.title}</h2>
                                <p className="popular-date">
                                    Дата релиза: {res.release_date}; Рейтинг: {res.vote_average}
                                </p>
                                <p className="popular-genre">
                                    Жанр:{" "}
                                    {res.genres.map(el => (
                                        <span>{el.name}; </span>
                                    ))}
                                </p>
                                <p>{res.overview}...</p>
                            </div>
                            <div>
                                <button className="popular__read-button">
                                    <Link to={`/movie/${res.id}`} className="movie-link">Подробнее</Link>
                                </button>
                                <button
                                    onClick={handleRemoveFavourite}
                                    id={res.id}
                                    className="popular__favourite-button"
                                >
                                    {localStorage.getItem(res.id) ? "Убрать" : "В избранное"}
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    )
}