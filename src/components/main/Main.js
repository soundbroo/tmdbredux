import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.css'
import Popular from './popular/popular'
import Favourite from './favourite/favourite'
import Movie from '../Movie'

const Main = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/favourite" component={Favourite} />
        <Route path="/movie" component={Movie} />
      </Switch>
    </div>
  )
}

export default Main
