import React from 'react'
import Link from 'next/link'

const Header = () => {
  return (
  <nav className='container flex items-center justify-between px-8 py-4 mx-auto'>
    <Link href="/">SpeakEasy
    </Link>

  </nav>
  )
}

export default Header
