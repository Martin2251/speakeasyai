import React from 'react'
import Link from 'next/link'
import { Ghost } from 'lucide-react'
import Image from 'next/image'

const Header = () => {
  return (
  <nav className='container flex items-center justify-between px-8 py-4 mx-auto'>
    <div className='flex lg:flex-1'>
    <Link href="/" className='transition-colors duration-200 text-gray-600 hover:text-purple-500'>
    <span className='flex items-center gap-2 shrink-0'>
        <Image src="/icon.ico" alt="speakeasy" width={32}height={32}className="hover:rotate-12 transform transition duration-200 ease-in-out"  />
        <span className='font-extrabold text-lg'>SpeakEasy</span>
        </span>
    </Link>
    </div>
    <div className='flex lg:justify-center gap-2 lg:gap-12 lg:items-center'></div>

  </nav>
  )
}

export default Header
