import axios from "axios";
import { SEARCH_MOVIES, SEARCH_FAV } from "../constants";

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
      popular: searchResult.data.results,
      totalPages: searchResult.data.total_pages,
      url: searchUrl
    }
  });
};

export const searchFav = (text, sRes) => dispatch => {
  const result = sRes.filter(res =>
    res.title.toLowerCase().includes(text)
  )

  dispatch({
    type: SEARCH_FAV,
    payload: result
  })
}