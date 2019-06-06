import {
    GET_FAVOURITES_MOVIES,
    SEARCH_FAV
} from '../constants'

const initialState = {
    key: "2b862e29bf2b0b3c26234080c46833f0",
    lang: "ru-RU",
    movies: [],
    sRes: [],
    search: "",
}

export const favourite = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVOURITES_MOVIES: {
            return { ...state, movies: action.payload.movies, sRes: action.payload.sRes, movieTitles: action.payload.movieTitles }
        }
        case SEARCH_FAV: {
            return { ...state, movies: action.payload }
        }
        default: return { ...state }
    }
}