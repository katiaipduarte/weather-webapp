import styled from 'styled-components'

export const Wrapper = styled.div`
	z-index: 1;
	display: flex;
	flex-direction: column;
	height: 100vh;
	justify-content: space-between;
	position: absolute;
	width: 100%;

	main {
		margin-bottom: auto;
		padding: 0 1rem;
	}

	@media all and (min-width: 960px) {
		max-width: 96rem;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;

		main {
			display: flex;
			flex-grow: 1;
			justify-content: end;
			margin-bottom: 5rem;
		}
	}
`
