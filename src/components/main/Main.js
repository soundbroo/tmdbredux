import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './Main.css'
import Popular from './popular/popular'
import Favourite from './favourite/favourite'
//import Popular from '../Popular'
//import Movie from '../Movie'
//import Favourite from '../Favourite'

const Main = () => {
  return (
    <div className="main-container">
      <Switch>
        <Route exact path="/popular" component={Popular} />
        <Route exact path="/favourite" component={Favourite} />
      </Switch>
    </div>
  )
}

export default Main
