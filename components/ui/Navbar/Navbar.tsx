import SearchBar from '@components/common/SearchBar/SearchBar'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Link from 'next/link'
import { useState } from 'react'

import { NavbarContainer } from './Navbar.style'

const Navbar = (): JSX.Element => {
	const [seeMobileMenu, setSeeMobileMenu] = useState<boolean>(false)

	return (
		<NavbarContainer>
			<nav>
				<ul
					data-testid='menu'
					className={seeMobileMenu ? 'menu active' : 'menu'}
				>
					<li className='logo'>
						<Link href='/'>weather.app⁢</Link>
					</li>
					<li className='toggle' data-testid='menu-btn'>
						<a
							role='button'
							tabIndex={0}
							aria-label='Click to open mobile menu'
							onClick={() => setSeeMobileMenu(!seeMobileMenu)}
							data-testid='mobile-menu-btn'
						>
							<FontAwesomeIcon icon={faBars} />
						</a>
					</li>
					<li className='item'>
						<Link href='/favourites'>Favourites</Link>
					</li>
					<li className='item'>
						<Link href='/search-history'>History</Link>
					</li>

					<ul className='mobile-menu'>
						<li className='mobile-item'>
							<Link href='/favourites'>Favourites</Link>
						</li>
						<li className='mobile-item'>
							<Link href='/search-history'>History</Link>
						</li>
						<li className='mobile-item'>
							<SearchBar />
						</li>
					</ul>
				</ul>
			</nav>
		</NavbarContainer>
	)
}

export default Navbar
