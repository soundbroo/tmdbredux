import { GET_POPULAR_MOVIES, IS_FAVOURITE } from '../constants'
import axios from 'axios'

export const getPopular = (key, lang, currentPage) => async dispatch => {
    const url = 'https://api.themoviedb.org/3/movie/popular?api_key=' + key + '&language=' + lang + '&page='
    const popular = await axios.get(url + currentPage)
    const genre = await axios.get('https://api.themoviedb.org/3/genre/movie/list?api_key=' + key + '&language=' + lang)

    dispatch({
        type: GET_POPULAR_MOVIES,
        payload: {
            popular: popular.data.results,
            genre: genre.data.genres,
            totalPages: popular.data.total_pages,
            currentPage: popular.data.page,
            url: url
        }
    })
}

export const isFavourite = (favourite) => {
    return {
        type: IS_FAVOURITE,
        payload: favourite
    }
}

