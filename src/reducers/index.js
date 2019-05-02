import { combineReducers } from 'redux'
import { popular } from './popularReducer'

export const rootReducer = combineReducers({
    popular,
})