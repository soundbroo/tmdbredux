import React from 'react'
import { Link } from 'react-router-dom'
import Prev from '../img/prev.png'
import Next from '../img/next.png'

export const MovieRecommend = ({ recommend, prevSimilar2, nextSimilar2, carousel2, clickSimilar }) => {
    return (
        <>
            <h2>Рекоммендуем</h2>
            <div className="similar">
                <img onClick={prevSimilar2} src={Prev} className="similar-button prev-button" alt="prev"></img>
                <div className="similar-movies" ref={carousel2}>
                    {recommend.map(el =>
                        <div><img src={"https://image.tmdb.org/t/p/w185/" + el.backdrop_path} alt={el.title}></img>
                            <Link to={`/movie/${el.id}`} onClick={(e) => clickSimilar(e, el.id)} className="movie-link">{el.title.substring(0, 23)}...</Link>
                        </div>
                    )}
                </div>
                <img onClick={nextSimilar2} src={Next} className="similar-button next-button" alt="next"></img>
            </div>
        </>
    )
}