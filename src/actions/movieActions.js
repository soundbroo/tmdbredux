import axios from 'axios'
import { GET_MOVIE_DATA, GET_SIMILAR } from '../constants'

export const getMovie = (key, lang, id) => async dispatch => {
    const url = "https://api.themoviedb.org/3/movie/" + id + "?api_key=" + key + "&language=" + lang
    const similarUrl = "https://api.themoviedb.org/3/movie/" + id + "/similar?api_key=" + key + "&language=" + lang
    const recommendUrl = "https://api.themoviedb.org/3/movie/" + id + "/recommendations?api_key=" + key + "&language=" + lang
    const commentsUrl = "https://api.themoviedb.org/3/movie/" + id + "/reviews?api_key=" + key + "&language=en-US&page=1"
    const imageUrl = "https://api.themoviedb.org/3/movie/" + id + "/images?api_key=" + key
    const movieRequest = await axios.get(url)
    const similarRequest = await axios.get(similarUrl)
    const recommendRequest = await axios.get(recommendUrl)
    const commentsRequest = await axios.get(commentsUrl)
    const imageRequest = await axios.get(imageUrl)

    dispatch({
        type: GET_MOVIE_DATA,
        payload: {
            movieData: movieRequest.data,
            date: movieRequest.data.release_date.split("-").splice(0, 1),
            currentGenre: movieRequest.data.genres.map(el => el.name),
            similar: similarRequest.data.results,
            recommend: recommendRequest.data.results,
            comments: commentsRequest.data.results,
            image: imageRequest.data.backdrops
        }
    })
}

export const getSimillar = (id) => {
    return {
        type: GET_SIMILAR,
        payload: id
    }
}