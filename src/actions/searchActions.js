import axios from "axios"
import { SEARCH_MOVIES, SEARCH_FAV, DISCOVER_MOVIES } from "../constants"

export const searchMovies = (text, key, lang, page, checked) => async dispatch => {

  if (checked.length !== 0) {
    const discoverUrl = "https://api.themoviedb.org/3/discover/movie?api_key=" +
      key + "&language=" + lang + "&sort_by=popularity.desc&page=" + page + "&with_genres=" + checked.map(el => `${el}%2C`)
    const discoverResult = await axios.get(discoverUrl)

    dispatch({
      type: DISCOVER_MOVIES,
      payload: {
        popular: discoverResult.data.results,
        totalPages: discoverResult.data.total_pages,
        url: discoverUrl,
        isLoaded: true
      }
    })
  } else {
    const searchUrl =
      "https://api.themoviedb.org/3/search/movie?api_key=" +
      key +
      "&language=" +
      lang +
      "&query=" +
      text +
      "&page="
    const searchResult = await axios.get(searchUrl + 1)

    dispatch({
      type: SEARCH_MOVIES,
      payload: {
        popular: searchResult.data.results,
        totalPages: searchResult.data.total_pages,
        url: searchUrl
      }
    })


  }
}

export const searchFav = (text, sRes) => dispatch => {
  const result = sRes.filter(res =>
    res.title.toLowerCase().includes(text)
  )

  dispatch({
    type: SEARCH_FAV,
    payload: result
  })
}