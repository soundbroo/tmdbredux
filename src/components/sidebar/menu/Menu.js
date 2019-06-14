import React from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux'
import { addGenre, getPopular, changeHref } from '../../../actions/popularActions'
import { searchMovies } from '../../../actions/searchActions'
import "./Menu.css";

class Menu extends React.Component {

  isChecked = (e) => {
    const { api_key, lang, checked, currentPage, page } = this.props
    if (e.target.checked) {
      this.props.checked.push(e.target.id)
      this.props.addGenre(this.props.checked)
      this.props.searchMovies('', api_key, lang, page, checked)

    } else {
      const del = this.props.checked.indexOf(e.target.id)
      if (del != -1 && checked.length == 1) {
        this.props.checked.splice(del, 1)
        this.props.addGenre(this.props.checked)
        this.props.getPopular(api_key, lang, currentPage)
      } else {
        if (del != -1) {
          this.props.checked.splice(del, 1)
          this.props.addGenre(this.props.checked)
          this.props.searchMovies('', api_key, lang, page, checked)
        }
      }

    }
  }

  handleClickPopular = () => {
    this.props.changeHref(true, this.props.checked)
  }

  handleClickFavourite = () => {
    this.props.changeHref(false, [])
    this.props.addGenre([])
  }

  render() {
    return (
      <>
        <hr color='#333333' />
        <Link className="menu-item" onClick={this.handleClickPopular} to="/popular">Популярные</Link>
        <hr color='#333333' />
        <Link className="menu-item" onClick={this.handleClickFavourite} to="/favourite">Избранные</Link>
        {this.props.href ? (<div className="genres" >
          {this.props.genres.map(el => {
            return <div className='genres-element'>
              <input id={el.id} type='checkbox' name={`${el.name}`} onChange={this.isChecked} />
              <label htmlFor={el.id}>{el.name}</label>
            </div>
          })}
        </div>) : <></>}
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    genres: state.popular.genre,
    api_key: state.popular.key,
    lang: state.popular.lang,
    currentPage: state.popular.currentPage,
    checked: state.popular.checked,
    href: state.popular.href,
    page: state.popular.page
  }
}

const mapDispatchToProps = {
  addGenre,
  getPopular,
  searchMovies,
  changeHref
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu)