import { GET_FAVOURITES_MOVIES, SEARCH_FAV, ENABLE_LOADER } from '../constants'

const initialState = {
    key: "2b862e29bf2b0b3c26234080c46833f0",
    lang: "ru-RU",
    movies: [],
    sRes: [],
    search: "",
    currentPage: 1,
    currentPageSize: 10,
    isLoaded: true
}

export const favourite = (state = initialState, action) => {
    switch (action.type) {
        case GET_FAVOURITES_MOVIES: {
            return { ...state, movies: action.payload.movies, sRes: action.payload.sRes, movieTitles: action.payload.movieTitles, isLoaded: action.payload.isLoaded }
        }
        case SEARCH_FAV: {
            return { ...state, movies: action.payload }
        }
        case ENABLE_LOADER: {
            return { ...state, isLoaded: action.payload }
        }
        default: return { ...state }
    }
}