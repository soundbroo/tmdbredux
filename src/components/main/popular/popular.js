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
import { PopularComponent } from './popularComponent'
import 'antd/dist/antd.css'

class Popular extends Component {
  async componentDidMount() {
    const { key, lang, currentPage } = this.props.popular
    this.props.getPopular(key, lang, currentPage)
    this.checkFavourite()
  }

  handleChangePage = page => {
    this.props.isLoadingDisable()
    const { url } = this.props.popular
    this.props.changePage(page, url)
    this.checkFavourite()
    window.scrollTo(0, 0)
  }

  handleAddFavourite = e => {
    e.preventDefault()
    this.setState({ favId: e.target }, () => {
      localStorage.setItem(this.state.favId.id, this.state.favId.id)
      this.checkFavourite()
    })
  }

  handleRemoveFavourite = e => {
    e.preventDefault()
    this.setState({ favId: e.target }, () => {
      localStorage.removeItem(this.state.favId.id, this.state.favId.id)
      this.checkFavourite()
    })
  }

  checkFavourite = () => {
    const { popular } = this.props.popular
    const arr = popular.map(res => res.id)
    const favourite = arr.filter(el => el == localStorage.getItem(el))
    console.log(favourite)
    this.props.isFavourite(favourite)
  }

  genreFunction = ids => {
    return this.props.popular.genre
      .filter(el => el.id === ids)
      .map(el => <span>{el.name}; </span>)
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
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Popular)
