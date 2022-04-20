import LocationList from '@components/common/LocationList/LocationList'
import { faSearch, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { searchForLocations } from '@services/search-locations.service'
import lodash from 'lodash'
import { ChangeEvent, FormEvent, useCallback, useState } from 'react'
import { SearchBarContainer } from './SearchBar.style'

const SearchBar = (): JSX.Element => {
	const [searchTerm, setSearchTerm] = useState<string>('')
	const [showClearButton, setShowClearButton] = useState<boolean>(false)
	const [locations, setLocations] = useState<GPSLocation[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	const [showOptions, setShowOptions] = useState<boolean>(false)

	const handleClearSearch = (): void => {
		setSearchTerm('')
		setShowClearButton(false)
		setShowOptions(false)
	}

	const handleChange = async (
		event: ChangeEvent<HTMLInputElement>
	): Promise<void> => {
		setShowClearButton(event.target.value.length !== 0)
		setSearchTerm(event.target.value)

		if (event.target.value.length >= 3) {
			setLoading(true)
			debounce(event.target.value)
		}

		setShowOptions(event.target.value.length >= 3)
	}

	const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
		event.preventDefault()

		setSearchTerm(searchTerm)
	}

	const debounce = useCallback(
		lodash.debounce(async (searchTerm: string) => {
			const res = await searchForLocations(searchTerm)
			const list: GPSLocation[] = res ? (res as GPSLocation[]) : []
			setLocations(list)
			setLoading(false)
		}, 500),
		[]
	)

	return (
		<>
			<SearchBarContainer
				tabIndex={-1}
				role='searchbox'
				aria-label='Search location form'
				onSubmit={(e) => handleSubmit(e)}
			>
				<button
					id='search-term-btn'
					aria-label='Click to search'
					tabIndex={-1}
					type='submit'
				>
					<FontAwesomeIcon icon={faSearch} />
				</button>

				<input
					type='text'
					placeholder='Another location'
					value={searchTerm}
					maxLength={50}
					onChange={handleChange}
					role='search'
					aria-label='Another location'
				/>
				<button
					id='clear-search-term-btn'
					aria-label='Click to clear search'
					onClick={handleClearSearch}
					style={{ visibility: showClearButton ? 'initial' : 'hidden' }}
					tabIndex={0}
				>
					<FontAwesomeIcon icon={faTimes} />
				</button>
			</SearchBarContainer>
			{!loading && showOptions && <LocationList locations={locations} />}
		</>
	)
}

export default SearchBar
