import styled from 'styled-components'

// export const MainContainer = styled.main`
// 	width: calc(100vw - 17px);
// 	height: 100vh;
// 	padding: 2.5rem 8rem;
// 	display: flex;
// 	flex-direction: column;
// 	background-repeat: no-repeat;
// 	background-size: cover;

// 	&::after {
// 		position: absolute;
// 		content: '';
// 		top: 0;
// 		left: 0;
// 		width: 100%;
// 		height: 100%;
// 		background-color: black;
// 		opacity: 0.3;
// 	}
// `
// export const Sidebar = styled.section`
// 	width: 35vw;
// 	background-color: rgba(0, 0, 0, 0.35);
// 	-webkit-backdrop-filter: blur(10px);
// 	backdrop-filter: blur(10px);
// 	padding: 1rem 4rem;
// 	position: absolute;
// 	right: 0;
// 	top: 0;
// 	bottom: 0;
// `

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
		max-width: 64rem;
		margin: 0 auto;
	}
`
