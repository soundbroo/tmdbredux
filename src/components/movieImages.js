import React from 'react'
import Prev from '../img/prev.png'
import Next from '../img/next.png'

export const MovieImages = ({ image, prevSimilar3, nextSimilar3, carousel3 }) => {
    return (
        <>
            <h2>Изображения</h2>
            <div className="similar">
                <img onClick={prevSimilar3} src={Prev} className="similar-button prev-button" alt="prev"></img>
                <div className="similar-movies" ref={carousel3}>
                    {image.map(el =>
                        <div><img src={"https://image.tmdb.org/t/p/w185/" + el.file_path} alt="image"></img>
                        </div>
                    )}
                </div>
                <img onClick={nextSimilar3} src={Next} className="similar-button next-button" alt="next"></img>
            </div>
        </>
    )
}