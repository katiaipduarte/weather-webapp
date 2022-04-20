import { GPSLocation } from '@interfaces/open-weather-api/location'
import Link from 'next/link'
import { SearchOptions } from './LocationList.style'

type Props = {
	locations: GPSLocation[]
}

const LocationList = (props: Props): JSX.Element => {
	const { locations } = props

	return (
		<SearchOptions role='list' tabIndex={-1}>
			{locations.length === 0 ? (
				<li data-testid='empty-list'>No results found</li>
			) : (
				<>
					{locations.map((location: GPSLocation) => (
						<li key={location.name} tabIndex={0} role='button'>
							<Link
								href={`/location?lat=${location.lat}&lon=${location.lon}`}
								passHref={true}
							>
								<a data-testid='location-name'>
									{location.name}, {location.country}
								</a>
							</Link>
						</li>
					))}
				</>
			)}
		</SearchOptions>
	)
}

export default LocationList
