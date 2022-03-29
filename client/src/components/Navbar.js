import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navStyle">
        {/* <div className="logo">
            Maybe img here
        </div> */}
        <nav className='item'>
            <ul className='ul'>
                <li>
                    <Link to='/'>Contacts</Link>
                </li>
                <li>
                    <Link to='/add'>+</Link>
                </li>
            </ul>
        </nav>
    </div>
  )
}
