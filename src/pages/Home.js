import React from 'react'

import Nav from './Nav'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <Nav />
        <div className='container mx-auto sm:px-24 md:px-32 xl:px-36 lg:px-36 mt-24 grid gri-col-1'>
        <section className='grid place-items-center h-full text-center'>
            <p className='text-6xl font-bold text-black'>Supercharge your productivity, with Notion.</p>
        </section>

        <section className='grid grid-cols-1 mt-32 mb-52'>
            <p className='text-black font-bold text-3xl mb-6'>Selected Projects</p>
            <div className='grid grid-cols-2'>
                <div className='rounded-xl'>
                    <img src='https://framerusercontent.com/images/ZVhwgWEYJPPyX4KkTptfdCcU.jpg' />
                    <h3 className='font-bold text-black text-2xl mt-4'>Lorem Ipsum</h3>
                    <p className='font-light text-zinc-600'>Company Name</p>
                </div>
            </div>
        </section>

        <Footer />
        </div>
    </div>
  )
}
