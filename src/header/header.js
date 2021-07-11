import React from 'react'
import './header.scss'

const Header = () => {

    return (
        <div className='header-area'>
			<span className='header'>
				<h1>Star DB</h1>
				<a className='link' href='url'>People</a>
				<a href='url'>Planets</a>
				<a href='url'>Starships</a>
			</span>
            <div className="sep"></div>
        </div>
    )
}
export default Header