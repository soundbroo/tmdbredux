import { GET_MOVIE_DATA, GET_SIMILAR } from '../constants'

const initialState = {
    key: "2b862e29bf2b0b3c26234080c46833f0",
    lang: "ru-RU",
    movieData: [],
    date: "",
    currentGenre: [],
    similar: [],
    recommend: [],
    comments: [],
    image: []
}

export const movie = (state = initialState, action) => {
    switch (action.type) {
        case (GET_MOVIE_DATA): {
            return {
                ...state,
                movieData: action.payload.movieData,
                date: action.payload.date,
                currentGenre: action.payload.currentGenre,
                similar: action.payload.similar,
                recommend: action.payload.recommend,
                comments: action.payload.comments,
                image: action.payload.image
            }
        }
        case (GET_SIMILAR): {
            return { ...state, id: action.payload }
        }
        default: return { ...state }
    }
}