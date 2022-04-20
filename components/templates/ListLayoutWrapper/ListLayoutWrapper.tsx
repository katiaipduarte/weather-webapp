import Navbar from '@components/common/Navbar/Navbar'
import SearchBar from '@components/common/SearchBar/SearchBar'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { getBackgroundImg } from '@utils/get-background-img'
import Link from 'next/link'
import { MainContainer, Sidebar } from './ListLayoutWrapper.style'

type Props = {
	locations: GPSLocation[]
	title: string
}

const ListLayoutWrapper = (props: Props): JSX.Element => {
	const { locations, title } = props

	return (
		<>
			<MainContainer
				style={{
					backgroundImage: `url(${getBackgroundImg('list')})`,
				}}
			>
				<Navbar />

				<h1>{title}</h1>
				<section className='location-list'>
					<ul role='list' tabIndex={-1}>
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
					</ul>
				</section>

				<Sidebar>
					<SearchBar />
				</Sidebar>
			</MainContainer>
		</>
	)
}

export default ListLayoutWrapper
