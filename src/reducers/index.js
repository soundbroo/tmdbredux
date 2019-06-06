import { combineReducers } from 'redux'
import { popular } from './popularReducer'
import { favourite } from './favouriteReducer'
import { movie } from './movieReducer'

export const rootReducer = combineReducers({
    popular,
    favourite,
    movie
})