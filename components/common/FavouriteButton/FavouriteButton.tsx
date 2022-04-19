import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { addFavourite, deleteFavourite } from '@store/favourites/action'
import { memo, useState } from 'react'
import { useDispatch } from 'react-redux'

import { FavouriteButtonContainer } from './FavouriteButton.style'

type Props = {
	location: GPSLocation
	status: boolean
}

const FavouriteButton = (props: Props): JSX.Element => {
	const { location, status } = props
	const [showFavButton, setShowFavButton] = useState<boolean>(status)
	const dispatch = useDispatch()

	const onFavourite = (): void => {
		dispatch(addFavourite(location))
		setShowFavButton(true)
	}

	const onUnfavourite = (): void => {
		dispatch(deleteFavourite(location))
		setShowFavButton(false)
	}

	return (
		<>
			<FavouriteButtonContainer
				onClick={onUnfavourite}
				style={{ display: showFavButton ? 'flex' : 'none' }}
				title='Unfavourite Location'
				aria-label='Unfavourite Location'
				className='unfavourite-btn'
			>
				<FontAwesomeIcon icon={faHeart} />
			</FavouriteButtonContainer>
			<FavouriteButtonContainer
				onClick={onFavourite}
				style={{ display: showFavButton ? 'none' : 'flex' }}
				title='Favourite Location'
				aria-label='Favourite Location'
				className='favourite-btn'
			>
				<FontAwesomeIcon icon={farHeart} />
			</FavouriteButtonContainer>
		</>
	)
}

export default memo(FavouriteButton)
