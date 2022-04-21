import styled from 'styled-components'

export const FavouriteButtonContainer = styled.button`
	background: transparent;
	border: none;
	height: 1.5rem;
	width: 1.5rem;
	position: absolute;
	top: -0.5rem;
	right: -0.5rem;

	&:focus,
	&:focus-visible {
		outline: 0.01rem solid white;
	}
	svg {
		height: 1.5rem;
		width: 1.5rem !important;
		cursor: pointer;
	}
	&.favourite-btn svg {
		color: white;
	}
	&.unfavourite-btn svg {
		color: white;
	}
`
