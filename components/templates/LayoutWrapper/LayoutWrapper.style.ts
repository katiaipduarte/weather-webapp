import styled from 'styled-components'

export const Logo = styled.h1`
	font-size: 0.75rem;
	font-weight: 600;
	color: gray;
	mix-blend-mode: difference;
	z-index: 999;
`

export const MainContainer = styled.main`
	width: 100vw;
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
