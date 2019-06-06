import React from "react";
import { connect } from "react-redux";
import { searchMovies, searchFav } from "../../../actions/searchActions";
import { getPopular } from "../../../actions/popularActions";
import { getFavourites } from "../../../actions/favouriteActions";
import "./Search.css";

class Search extends React.Component {
  handleSearch = e => {
    e.preventDefault();
    const { api_key, lang, currentPage, searchMovies, getPopular, sRes, searchFav, getFavourites } = this.props
    if (window.location.href.includes("/popular")) {
      if (e.target.value !== "") {
        searchMovies(e.target.value, api_key, lang)
      } else {
        getPopular(api_key, lang, currentPage)
      }
    } else
      if (window.location.href.includes("/favourite")) {
        if (e.target.value !== "") {
          searchFav(e.target.value, sRes)
        } else {
          getFavourites(api_key, lang)
        }
      }

  };
  render() {
    return (
      <input
        onChange={this.handleSearch}
        type="text"
        className="search"
        placeholder="Поиск"
      />
    );
  }
}

const mapStateToProps = state => {
  return {
    api_key: state.popular.key,
    lang: state.popular.lang,
    currentPage: state.popular.currentPage,
    sRes: state.favourite.sRes,
    movies: state.favourite.movies
  };
};

const mapDispatchToProps = {
  searchMovies,
  searchFav,
  getPopular,
  getFavourites
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
