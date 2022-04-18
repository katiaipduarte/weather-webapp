import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import searchStateReducer from './search/reducer'
import { SearchState } from './search/type'

export interface GlobalState {
	searchState: SearchState
}

const combinedReducer = combineReducers<GlobalState>({
	searchState: searchStateReducer,
})

const bindMiddleware = (middleware: any) => {
	if (process.env.NODE_ENV !== 'production') {
		const { composeWithDevTools } = require('redux-devtools-extension')
		return composeWithDevTools(applyMiddleware(...middleware))
	}
	return applyMiddleware(...middleware)
}

const store = createStore(combinedReducer, bindMiddleware([thunk]))

export default store
