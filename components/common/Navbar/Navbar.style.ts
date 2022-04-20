import styled from 'styled-components'

export const NavbarContainer = styled.nav`
	z-index: 999;

	.menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: flex-start;
		align-items: center;
		list-style-type: none;

		ul {
			li a {
				display: block;
				padding: 1.5rem 0.5rem;
				text-decoration: none;
			}
		}

		.logo {
			font-size: 0.75rem;
			font-weight: 600;
			mix-blend-mode: difference;
		}

		.item {
			padding: 1rem;
			text-align: center;
			font-size: 1.25rem;
			color: white;
			mix-blend-mode: difference;
		}
	}
`
