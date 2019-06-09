import React from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'antd'

export const MovieRecommend = ({ recommend, prevSimilar2, nextSimilar2, carousel2, clickSimilar }) => {
    return (
        <>
            <h2>Рекоммендуем</h2>
            <div className="similar">
                <Icon onClick={prevSimilar2} type="left" className="similar-button prev-button" alt="prev" />
                <div className="similar-movies" ref={carousel2}>
                    {recommend.map(el =>
                        <div><img src={"https://image.tmdb.org/t/p/w185/" + el.backdrop_path} alt={el.title}></img>
                            <Link to={`/movie/${el.id}`} onClick={(e) => clickSimilar(e, el.id)} className="movie-link">{el.title.substring(0, 23)}...</Link>
                        </div>
                    )}
                </div>
                <Icon onClick={nextSimilar2} type="right" className="similar-button next-button" alt="next" />
            </div>
        </>
    )
}