import styled from 'styled-components'

export const NavbarContainer = styled.header`
	.menu {
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
		align-items: center;

		.menu {
			position: relative;

			li {
				a {
					display: block;
					padding: 0 0.5rem;
					text-decoration: none;
				}
			}
		}

		.toggle {
			padding: 1.5rem 1rem;
			order: 1;
			a {
				svg {
					color: white;
					mix-blend-mode: difference;
					height: 1.5rem;
					font-size: 2rem;
				}
			}
		}

		.logo {
			color: white;
			mix-blend-mode: difference;
			padding: 1.5rem 1rem;
		}

		.item,
		.mobile-item {
			color: white;
			padding: 1rem;
			order: 3;
			width: 100%;
			text-align: center;
			display: none;
			font-size: 1.25rem;
		}
	}

	.active {
		.item {
			display: none;
		}

		.mobile-menu {
			position: absolute;
			top: 4rem;
			left: 0;
			right: 0;
			z-index: 2;
			background-color: rgba(0, 0, 0, 0.95);
			-webkit-backdrop-filter: blur(10px);
			backdrop-filter: blur(10px);

			.mobile-item {
				display: block;
			}
		}
	}

	/* Desktop menu */
	@media all and (min-width: 960px) {
		.menu {
			justify-content: center;
			align-items: flex-start;
			flex-wrap: nowrap;
			background: none;
			width: 65%;
			.logo {
				flex: 1;
				order: 0;
			}
			.toggle {
				display: none;
			}
			.item {
				display: block;
				width: auto;
				font-size: 1rem;
				border: none;
			}
		}
	}
`
