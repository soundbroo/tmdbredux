import React from 'react'
import { Icon } from 'antd'

export const MovieImages = ({ image, prevSimilar3, nextSimilar3, carousel3 }) => {
    return (
        <>
            <h2>Изображения</h2>
            <div className="similar">
                <Icon onClick={prevSimilar3} type="left" className="similar-button prev-button" alt="prev" />
                <div className="similar-movies" ref={carousel3}>
                    {image.map(el =>
                        <div><img src={"https://image.tmdb.org/t/p/w185/" + el.file_path} alt="image"></img>
                        </div>
                    )}
                </div>
                <Icon onClick={nextSimilar3} type="right" className="similar-button next-button" alt="next" />
            </div>
        </>
    )
}