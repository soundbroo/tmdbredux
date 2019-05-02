import React from "react";
import { connect } from "react-redux";
import { searchMovies } from "../../../actions/searchActions";
import { getPopular } from "../../../actions/popularActions";
import "./Search.css";

class Search extends React.Component {
  handleSearch = e => {
    e.preventDefault();
    const { api_key, lang, currentPage, searchMovies, getPopular } = this.props;
    if (e.target.value !== "") {
      console.log(api_key);
      searchMovies(e.target.value, api_key, lang);
    } else {
      getPopular(api_key, lang, currentPage);
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
    search: state.popular.search,
    api_key: state.popular.key,
    lang: state.popular.lang,
    currentPage: state.popular.currentPage
  };
};

const mapDispatchToProps = {
  searchMovies,
  getPopular
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);
