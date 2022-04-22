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
		h1 {
			position: relative;
			margin: 1.5rem 0 3rem;

			&:before {
				content: '';
				position: absolute;
				width: 4rem;
				bottom: -10px;
				left: 0;
				border-bottom: 0.25rem solid white;
			}
		}

		.location-list {
			ul {
				color: white;
				background-color: rgba(0, 0, 0, 0.35);
				padding: 0 1rem;
				width: 100%;
				li {
					padding: 1rem 0;

					a {
						cursor: pointer;
						font-weight: 500;
						font-size: 1.25rem;
					}
				}
			}
		}
	}

	@media all and (min-width: 960px) {
		max-width: 96rem;
		margin-left: auto;
		margin-right: auto;
		left: 0;
		right: 0;
	}
`
