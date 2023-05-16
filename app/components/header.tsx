import React from 'react'
import Link from 'next/link'

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 right-0 bg-gray-900 text-white p-4 ">
      <nav className="flex justify-between">
        <Link href="/">NextTravel</Link>
        <ul className="flex space-x-4">
          <li>
            <Link href="#about">About</Link>
          </li>
          <li>
            <Link href="#gallery">Gallery</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
