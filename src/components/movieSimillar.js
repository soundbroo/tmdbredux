import React from 'react'
import { Link } from 'react-router-dom'
import Prev from '../img/prev.png'
import Next from '../img/next.png'

export const MovieSimillar = ({ similar, prevSimilar1, nextSimilar1, carousel1, clickSimilar }) => {
    return (
        <>
            <h2>Похожие фильмы</h2>
            <div className="similar">
                {similar.length == 0 ? <p>Этот фильм уникален и ни на что не похож</p> :
                    <><img onClick={prevSimilar1} src={Prev} className="similar-button prev-button" alt="prev"></img>
                        <div className="similar-movies" ref={carousel1}>
                            {similar.map(el =>
                                <div><img src={"https://image.tmdb.org/t/p/w185/" + el.backdrop_path} alt={el.title}></img>
                                    <Link to={`/movie/${el.id}`} onClick={(e) => clickSimilar(e, el.id)} className="movie-link">{el.title.substring(0, 23)}...</Link>
                                </div>
                            )}
                        </div>
                        <img onClick={nextSimilar1} src={Next} className="similar-button next-button" alt="next"></img></>
                }

            </div>
        </>
    )
}
