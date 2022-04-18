import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

export interface GlobalState {
	// searchState: SearchState
}

const combinedReducer = combineReducers<GlobalState>({
	// searchState: searchStateReducer,
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
