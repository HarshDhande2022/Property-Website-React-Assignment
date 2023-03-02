import React, {useState} from 'react'
import {HiOutlineMenuAlt4} from 'react-icons/hi'
import {FaRegTimesCircle} from 'react-icons/fa'
import {BsFillHouseFill} from 'react-icons/bs'

import './Navbar.css'

const Navbar = () => {

    const[click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    return (
        <div className='navbar'>
            <div className='container'>
                <h1><span><BsFillHouseFill />Buy</span>Property</h1>
                
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li><a href='https://github.com/HarshDhande2022'>Home</a></li>
                    <li><a href='https://github.com/HarshDhande2022'>Search</a></li>
                    <li><a href='https://github.com/HarshDhande2022'>About</a></li>
                    <li><a href='https://github.com/HarshDhande2022'>Contact</a></li>
                </ul>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaRegTimesCircle className='icon' />) : (<HiOutlineMenuAlt4 className='icon' />)}
                
                </div>
            </div>
        </div>
    )
}

export default Navbar
