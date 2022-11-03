import React from 'react'

import Nav from './Nav'
import Projects from './data/Projects'
import Footer from './Footer'

export default function Home() {
  return (
    <div>
        <Nav />
        <div className='container mx-auto sm:px-24 md:px-32 xl:px-36 lg:px-36 mt-24 grid gri-col-1'>
        <section className='grid place-items-center h-full text-center'>
            <p className='xl:text-6xl lg:text-6xl md:text-4xl sm:text-4xl  xs:text-5xl font-bold text-black'>Ivan is an UX Engineer, based in Cupertino</p>
        </section>

        <section className='grid grid-cols-1 mt-44 mb-52'>
            <p className='text-black font-bold xl:text-3xl lg:text-3xl md:text-3xl sm:text-2xl xs:text-2xl mb-6'>Selected Projects</p>
            <Projects />
        </section>

        <section className='text-center w-full my-32'>
          <h1 className='font-bold text-3xl'>“ivan is a great designer, a great developer and an excellent problem solver”</h1>
          <p className='text-zinc-500'>Solikin Barkowi — Apple Hardware Engineer</p>
        </section>

        <section className=' py-6 mb-32'>
          <div className='bg-zinc-100 rounded-2xl lg:px-16 xl:px-16 md:px-12 sm:px-12 xs:px-12 pt-12 grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1' >
            <div className='grid content-between pb-12'>
              <h1 className='font-bold xl:text-7xl lg:text-6xl md:text-5xl sm:text-3xl xs:text-3xl'>Nice to meet you</h1>
              <h1 className='font-bold xl:text-5xl lg:text-5xl md:text-3xl sm:text-2xl xs:text-2xl'>Ivan</h1>
            </div>
            <img src='assets\media\face.png' />
          </div>
        </section>

        <Footer />
        </div>
    </div>
  )
}
