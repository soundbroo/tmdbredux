import React, { Component } from "react";
import "./favourite.css";
import { Loader } from '../../Loader'
import { FavouriteComponent } from "./favouriteComponent";
import { connect } from 'react-redux'
import { getFavourites, isLoadingFinished } from '../../../actions/favouriteActions'
import { isLoadingDisable } from '../../../actions/popularActions'
import { Pagination } from 'antd'

class Favourite extends Component {
  constructor() {
    super()
    this.state = {
      currentPage: 1,
      currentPageSize: 10
    }
  }

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
    this.props.getFavourites(key, lang, this.state.currentPage, this.state.currentPageSize);
  }

  handleChangePage = (page, pageSize) => {
    this.props.isLoadingFinished()
    this.setState({ currentPage: page })
    const { key, lang } = this.props.favourite
    this.props.getFavourites(key, lang, page, pageSize)
    // window.scrollTo(0, 0)
  }

  itemRender = (current, type, originalElement) => {
    if (type === 'prev') {
      return <a>Назад</a>;
    }
    if (type === 'next') {
      return <a>Вперед</a>;
    }
    return originalElement;
  }

  render() {
    return (
      <>
        {this.props.favourite.isLoaded == false ? (<Loader />) :
          <><FavouriteComponent movies={this.props.favourite.movies} handleRemoveFavourite={this.handleRemoveFavourite} />
            <Pagination
              itemRender={this.itemRender}
              className="popular-pagination"
              onChange={this.handleChangePage}
              defaultCurrent={1}
              pageSize={10}
              total={localStorage.length}
            /></>}
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
  getFavourites,
  isLoadingDisable,
  isLoadingFinished
}


export default connect(mapStateToProps, mapDispatchToProps)(Favourite);
