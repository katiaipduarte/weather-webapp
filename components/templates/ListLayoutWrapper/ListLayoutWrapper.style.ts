import styled from 'styled-components'

export const MainContainer = styled.main`
	width: calc(100vw - 17px);
	height: 100vh;
	padding: 2.5rem 8rem;
	display: flex;
	flex-direction: column;
	background-repeat: no-repeat;
	background-size: cover;

	&::after {
		position: absolute;
		content: '';
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: black;
		opacity: 0.3;
	}

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
		z-index: 999;

		ul {
			width: fit-content;
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
	z-index: 999;
`
