import React, { Component } from "react";
import "./favourite.css";
import { FavouriteComponent } from "./favouriteComponent";
import { connect } from 'react-redux'
import {
  getFavourites
} from '../../../actions/favouriteActions'

class Favourite extends Component {

  componentDidMount() {
    const { key, lang } = this.props.favourite
    this.props.getFavourites(key, lang);
  }

  handleRemoveFavourite = (e) => {
    const { key, lang } = this.props.favourite
    e.preventDefault();
    localStorage.removeItem(e.target.id, e.target.id);
    this.props.getFavourites(key, lang);
  }

  render() {
    return (
      <FavouriteComponent movies={this.props.favourite.movies} handleRemoveFavourite={this.handleRemoveFavourite} />
    )
  }
}

const mapStateToProps = state => {
  return {
    favourite: state.favourite
  }
}

const mapDispatchToProps = {
  getFavourites
}


export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
