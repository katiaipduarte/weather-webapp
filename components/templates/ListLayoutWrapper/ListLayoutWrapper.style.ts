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

		h1 {
			position: relative;
			margin: 1.5rem 0;

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
		max-width: 64rem;
		margin: 0 auto;
	}
`

export const Sidebar = styled.section`
	width: 35vw;
	background-color: rgba(0, 0, 0, 0.35);
	-webkit-backdrop-filter: blur(10px);
	backdrop-filter: blur(10px);
	padding: 1rem 4rem;
	position: absolute;
	right: 0;
	top: 0;
	bottom: 0;
`
