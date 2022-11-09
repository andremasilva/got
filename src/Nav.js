import React from 'react'
import { Link } from 'react-router-dom'
import Search from './Search'

const nav = () => {
    return (
        <nav>
            <Link to='/'><h1>Goat</h1></Link>
            <ul className='nav-links'>
                <Link to='/characters'>
                    <li> All Characters </li>
                </Link>
                <Link to='/stark'>
                    <li> House Stark </li>
                </Link>
                <Link to='/continents'>
                    <li> Continents </li>
                </Link>
            </ul>
        </nav>
    )
}

export default nav