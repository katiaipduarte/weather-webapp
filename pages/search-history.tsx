import ListLayoutWrapper from '@components/templates/ListLayoutWrapper/ListLayoutWrapper'
import { GlobalState } from '@store/store'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useSelector } from 'react-redux'

const SearchHistory: NextPage = () => {
	const history = useSelector((state: GlobalState) => state.searchHistoryState)

	return (
		<>
			<Head>
				<title>Search History</title>
			</Head>
			<ListLayoutWrapper
				title={'Search History'}
				locations={history.locations}
			/>
		</>
	)
}

export default SearchHistory
