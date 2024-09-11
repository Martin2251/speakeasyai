import React from 'react'
import { Button } from '../ui/button'
import Link from 'next/link'
import { ArrowLeftRightIcon, ArrowRightIcon } from 'lucide-react'

const Banner = () => {
  return (
   <section className='lg:max-w-6xl mx-auto flex flex-col z-0 items-center justify-center py-28 sm:pt-32 transition-all animate-in'>
    <h1 className='py-6 text-center'>Turn your words into <span className='underline underline-offset-8 decoration-dashed decoration-purple-200'>Captivating</span> blog posts</h1>
    <h2 className='text-center px-4 lg:px-0 lg:max-w-4xl'>Convert your video or voice into a Blog Post in seconds with the power of AI</h2>
    <Button variant={'link'} className='mt-6 text-xl rounded-full px-12 py-8 lg:mt-20 bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-indigo-600 hover:to-purple-600 text-white font-bold shadow-lg hover:no-underline'>
        <Link href="/pricing"><span className='relative'>Get Speak Easy <ArrowRightIcon className='absolute -bottom-1 left-0 w-full h-0.5 bg-white transform scale-x-0 transition-transform duration-300 origin-left group-hover:scale-x-100' /> </span></Link>
    </Button>

   </section>
  )
}

export default Banner
