import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className="navStyle">
        {/* <div className="logo">
            Maybe img here
        </div> */}
        <br/>
        <nav className='center'>
            <ul className='ul'>
                <li>
                    <Link to='/'>Contacts</Link>
                </li>
                <li>
                    <Link to='/add'>+</Link>
                </li>
                <li>
                    <Link to='/delete'>-</Link>
                </li>
                {/* <li>
                    <Link to='/specific'>Specific Contact</Link>
                </li> */}
            </ul>
        </nav>
    </div>
  )
}
