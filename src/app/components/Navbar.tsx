import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
  <nav>
      <span>
      <div className='bg-indigo-400 text-blue-900'>
        <h1>Navbar Page</h1>
      </div>
      <ul>
        <li><a className="text-blue-800 bg-blue-300 " target='blank' href='/'>Home</a></li>
        <li><a className="text-pink-700 bg-pink-300" target='blank' href='/about'>About</a></li>
        <li><a className="text-orange-700 bg-orange-300" target='blank' href='/contact'>Contact</a></li>
        <li><a className="text-pruple-800 bg-purple-200" target='blank' href="/services">Services</a></li>
      </ul>
    </span>
 </nav>
    
  )
}
export default Navbar
