import Link from 'next/link'

import { NavbarContainer } from './Navbar.style'

const Navbar = (): JSX.Element => {
	return (
		<NavbarContainer>
			<ul className='menu' data-testid='menu'>
				<li className='logo'>
					<Link href='/'>weather.app⁢</Link>
				</li>
				<li className='item'>
					<Link href='/favourites'>Favourites</Link>
				</li>
				<li className='item'>
					<Link href='/search-history'>History</Link>
				</li>
				{/* <li className='toggle' data-testid='menu-btn'>
					<a
						role='button'
						tabIndex={0}
						aria-label='Click to open mobile menu'
						onClick={() => setSeeMobileMenu(!seeMobileMenu)}
						data-testid='mobile-menu-btn'
					>
						<FontAwesomeIcon icon={faBars} />
					</a>
				</li> */}
			</ul>
		</NavbarContainer>
	)
}

export default Navbar
