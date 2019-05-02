import axios from "axios";
import { SEARCH_MOVIES } from "../constants";

export const searchMovies = (text, key, lang) => async dispatch => {
  const searchUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    key +
    "&language=" +
    lang +
    "&query=" +
    text +
    "&page=";
  const searchResult = await axios.get(searchUrl + 1);

  dispatch({
    type: SEARCH_MOVIES,
    payload: {
      search: text,
      popular: searchResult.data.results,
      totalPages: searchResult.data.total_pages,
      url: searchUrl
    }
  });
};

/* if (this.state.search !== "") {
  const { key, lang, search } = this.state;
  const searchUrl =
    "https://api.themoviedb.org/3/search/movie?api_key=" +
    key +
    "&language=" +
    lang +
    "&query=" +
    search +
    "&page=";
  const searchResult = await axios.get(searchUrl + 1);
  const movies = searchResult.data;
  this.setState({
    popular: movies.results,
    totalPages: movies.total_pages,
    url: searchUrl
  });
  this.checkFavourite();
} else {
  this.defaultState();
} */
