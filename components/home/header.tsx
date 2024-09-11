import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
  <nav className='container flex items-center justify-between px-8 py-4 mx-auto'>
    <Link href="/" className='transition-colors duration-200 text-gray-600 hover:text-purple-500'><span className='flex items-center gap-2 shrink-0'><Ghost className="hover:rotate-12 transform transition duration-200 ease-in-out"  /></span>SpeakEasy
    </Link>

  </nav>
  )
}

export default Header
