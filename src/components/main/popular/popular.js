import React, { Component } from 'react'
import { Loader } from '../../Loader'
import './popular.css'
import { Pagination } from 'antd'
import { connect } from 'react-redux'
import {
  getPopular,
  isFavourite,
  changePage,
  isLoadingDisable,
} from '../../../actions/popularActions'
import { searchMovies } from '../../../actions/searchActions'
import { PopularComponent } from './popularComponent'
import 'antd/dist/antd.css'

class Popular extends Component {
  componentDidMount() {
    const { key, lang, currentPage } = this.props.popular
    this.props.getPopular(key, lang, currentPage)
    this.checkFavourite()
  }

  handleChangePage = page => {
    this.props.isLoadingDisable()
    const { url, key, lang, checked } = this.props.popular
    if (this.props.popular.checked.length == 0) {
      this.props.changePage(page, url)
    } else {
      this.props.searchMovies('', key, lang, page, checked)
    }
    this.checkFavourite()
    window.scrollTo(0, 0)
  }

  handleAddFavourite = e => {
    e.preventDefault()
    localStorage.setItem(e.target.id, e.target.id)
    this.checkFavourite()
  }

  handleRemoveFavourite = e => {
    e.preventDefault()
    localStorage.removeItem(e.target.id, e.target.id)
    this.checkFavourite()
  }

  checkFavourite = () => {
    const { popular } = this.props.popular
    const arr = popular.map(res => res.id)
    const favourite = arr.filter(el => el == localStorage.getItem(el))
    this.props.isFavourite(favourite)
  }

  genreFunction = ids => {
    return this.props.popular.genre
      .filter(el => el.id === ids)
      .map(el => <span>{el.name}; </span>)
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
    const { popular, currentPage, totalPages, isLoaded } = this.props.popular
    return (
      <>
        {isLoaded == false ? (
          <Loader />
        ) : (
            <>
              <PopularComponent
                popular={popular}
                genreFunction={this.genreFunction}
                handleAddFavourite={this.handleAddFavourite}
                handleRemoveFavourite={this.handleRemoveFavourite}
              />
              <Pagination
                itemRender={this.itemRender}
                className="popular-pagination"
                onChange={this.handleChangePage}
                defaultCurrent={currentPage}
                total={totalPages * 10}
              />
            </>
          )}
      </>
    )
  }
}

const mapStateToProps = state => {
  return {
    popular: state.popular,
  }
}

const mapDispatchToProps = {
  getPopular,
  isFavourite,
  changePage,
  isLoadingDisable,
  searchMovies
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popular)
