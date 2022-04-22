import styled from 'styled-components'

export const SearchOptions = styled.ul`
	border-bottom: 1px solid white;
	padding-bottom: 2.25rem;
	margin: 0 auto;

	li {
		color: white;
		line-height: 2.5rem;
		cursor: pointer;

		a {
			font-size: 0.75rem;
			font-weight: 400;
		}

		&:hover,
		&:focus,
		&:focus-visible {
			a {
				filter: brightness(75%);
			}
		}
	}
	@media (min-width: 768px) {
		max-width: 32rem;
	}
`
