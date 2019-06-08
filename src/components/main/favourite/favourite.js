import React, { Component } from "react";
import "./favourite.css";
import { FavouriteComponent } from "./favouriteComponent";
import { connect } from 'react-redux'
import { getFavourites } from '../../../actions/favouriteActions'
import { Pagination } from 'antd'

class Favourite extends Component {

  componentDidMount() {
    const { key, lang } = this.props.favourite
    const page = 1
    const pageSize = 10
    this.props.getFavourites(key, lang, page, pageSize)
  }

  handleRemoveFavourite = (e) => {
    const { key, lang } = this.props.favourite
    e.preventDefault();
    localStorage.removeItem(e.target.id, e.target.id);
    this.props.getFavourites(key, lang);
  }

  handleChangePage = (page, pageSize) => {
    const { key, lang } = this.props.favourite
    this.props.getFavourites(key, lang, page, pageSize)
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <>
        <FavouriteComponent movies={this.props.favourite.movies} handleRemoveFavourite={this.handleRemoveFavourite} />
        <Pagination
          className="popular-pagination"
          onChange={this.handleChangePage}
          // onShowSizeChange={}
          defaultCurrent={1}
          pageSize={10}
          total={localStorage.length}
        />
      </>
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
