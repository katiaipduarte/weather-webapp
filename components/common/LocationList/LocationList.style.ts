import styled from 'styled-components'

export const SearchOptions = styled.ul`
	border-bottom: 1px solid white;
	padding-bottom: 3.25rem;

	li {
		color: white;
		line-height: 2.5rem;
		cursor: pointer;

		&:hover,
		&:focus,
		&:focus-visible {
			p {
				filter: brightness(75%);
			}
		}
	}
	@media (min-width: 768px) {
		max-width: 32rem;
	}
`
