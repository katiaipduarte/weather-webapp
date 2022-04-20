import { faHeart as farHeart } from '@fortawesome/free-regular-svg-icons'
import { faHeart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { GPSLocation } from '@interfaces/open-weather-api/location'
import { addFavourite, deleteFavourite } from '@services/favourites.service'
import { memo, useState } from 'react'
import { toast } from 'react-toastify'

import { FavouriteButtonContainer } from './FavouriteButton.style'

type Props = {
	location: GPSLocation
	status: boolean
	favouriteId: string
}

const FavouriteButton = (props: Props): JSX.Element => {
	const { location, status, favouriteId } = props
	const [showFavButton, setShowFavButton] = useState<boolean>(status)

	const onFavourite = (): void => {
		addFavourite(location)
		setShowFavButton(true)
		toast.success('Congrats! You added a new favourite location')
	}

	const onUnfavourite = (): void => {
		deleteFavourite(favouriteId)
		setShowFavButton(false)
		toast('Location removed with success')
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
