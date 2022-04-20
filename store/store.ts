import { applyMiddleware, combineReducers, createStore } from '@reduxjs/toolkit'
import thunk from 'redux-thunk'
import searchHistoryReducer from './search-history/reducer'
import { SearchHistory } from './search-history/type'

export interface GlobalState {
	searchHistoryState: SearchHistory
}

const combinedReducer = combineReducers<GlobalState>({
	searchHistoryState: searchHistoryReducer,
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
