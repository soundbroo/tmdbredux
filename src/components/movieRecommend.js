import React from 'react'
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
                            <p onClick={(e) => clickSimilar(e, el.id)}>{el.title.substring(0, 23)}...</p>
                        </div>
                    )}
                </div>
                <img onClick={nextSimilar2} src={Next} className="similar-button next-button" alt="next"></img>
            </div>
        </>
    )
}