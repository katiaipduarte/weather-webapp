import ListLayoutWrapper from '@components/templates/ListLayoutWrapper/ListLayoutWrapper'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { getFavourites } from '@services/favourites.service'
import type { NextPage } from 'next'
import Head from 'next/head'
import { useEffect, useState } from 'react'

const Favourites: NextPage = () => {
	const [favourites, setFavourites] = useState<GPSLocation[]>([])

	useEffect(() => {
		getFavourites().then((res) => {
			setFavourites(res)
		})
	}, [])

	return (
		<>
			<Head>
				<title>Favourite Locations</title>
			</Head>
			<ListLayoutWrapper
				title={'Favourites Locations'}
				locations={favourites}
			/>
		</>
	)
}

export default Favourites
