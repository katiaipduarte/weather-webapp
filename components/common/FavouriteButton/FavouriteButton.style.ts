import styled from 'styled-components'

export const FavouriteButtonContainer = styled.button`
	position: absolute;
	background: transparent;
	border: none;
	height: 2rem;
	width: 2rem;
	top: 0.5rem;
	right: 0;
	z-index: 999;

	&:focus,
	&:focus-visible {
		outline: 0.01rem solid white;
	}
	svg {
		height: 2rem;
		width: 2rem !important;
		cursor: pointer;
	}
	&.favourite-btn svg {
		color: white;
	}
	&.unfavourite-btn svg {
		color: white;
	}
`
