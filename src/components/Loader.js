import React from 'react'
import './Loader.css'
export const Loader = () => {
  return (
    <div className="loader">
      <div className="loader-card">
        <div className="image"> </div>

        <div className="loader-card__description">

          <div><div className="title"> </div>
            <div className="loader-date"></div>
            <div className="loader-genre"></div>
            <div className="loader-description"></div></div>
          <div>
            <button className="loader__read-button">
            </button>
            <button className="loader__favourite-button"></button>
          </div>

        </div>

      </div>

    </div>

  )
}
