import React from 'react'

export const MovieOverview = ({ comments }) => {
    return (
        <>
            <h2>Рецензии</h2>
            <div className="movie-card comments-card">{comments.length == 0 ? <p className="no-comments">Рецензий еще нет</p> :
                comments.map(el =>
                    <div>
                        <h2>{el.author}</h2>
                        <div>{el.content}</div>
                    </div>)
            }
            </div>
        </>
    )
}