import { PlacesResponse } from '@interfaces/places-response'
import Link from 'next/link'
import { SearchOptions } from './LocationList.style'

type Props = {
	locations: PlacesResponse[]
}

const LocationList = (props: Props): JSX.Element => {
	const { locations } = props

	return (
		<SearchOptions role='list' tabIndex={-1}>
			{locations.length === 0 ? (
				<li data-testid='empty-list'>No results found</li>
			) : (
				<>
					{locations.map((location: PlacesResponse) => (
						<li key={location.id} tabIndex={0} role='button'>
							<Link
								href={`/location?lat=${location.coordinates.latitude}&lon=${location.coordinates.longitude}`}
								passHref={true}
							>
								<p data-testid='location-name'>
									{location.name}, {location.country.name}
								</p>
							</Link>
						</li>
					))}
				</>
			)}
		</SearchOptions>
	)
}

export default LocationList
