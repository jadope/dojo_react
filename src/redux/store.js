import { composeWithDevTools } from 'redux-devtools-extension'

import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import {gamesReducer, SearchReducer } from './reducer'

// DefaultState
export const defaultGamesState = {
    pokemon: 20,
}
export const initialStateSearch = {
    loading: false,
    pokemon: [],
    error: ''
}

// Store
const rootReducers = combineReducers({
    games: gamesReducer,
    seeker: SearchReducer
})

// copiar esta linea si se tiene redux devtools instalado
const store = createStore(rootReducers, composeWithDevTools(
    applyMiddleware(thunk)
))


export default store;