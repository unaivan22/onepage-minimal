import React from 'react'

export default function Footer() {
  return (
    <div className='grid gap-y-12'>
      <section className='grid grid-cols-5 gap-x-4'>
        <div className='col-span-2'>
            <h1 className='text-4xl font-bold leading-none mb-2'>Frequently asked questions</h1>
            <p className='mb-6 text-zinc-600'>If anything else, send us a message below. </p>
            <button class="bg-zinc-900 text-white font-bold py-2 px-4 rounded-full">
                Send a message
            </button>
        </div>
        <div className='col-span-3'>
            <div className='mb-12'>
                <h1 className='font-bold text-2xl'>Energeek</h1>
                <p className='font-light text-md text-zinc-500'>2019 - Current</p>
                <ul className='list-disc list-inside text-sm font-normal text-zinc-600'>
                    <li>aaa</li>
                    <li>aaa</li>
                </ul>
            </div>
            <div className='mb-12'>
                <h1 className='font-bold text-2xl'>Energeek</h1>
                <p className='font-light text-md text-zinc-500'>2019 - Current</p>
                <ul className='list-disc list-inside text-sm font-normal text-zinc-600'>
                    <li>aaa</li>
                    <li>aaa</li>
                </ul>
            </div>
            <div className='mb-12'>
                <h1 className='font-bold text-2xl'>Energeek</h1>
                <p className='font-light text-md text-zinc-500'>2019 - Current</p>
                <ul className='list-disc list-inside text-sm font-normal text-zinc-600'>
                    <li>aaa</li>
                    <li>aaa</li>
                </ul>
            </div>
            <div className='mb-12'>
                <h1 className='font-bold text-2xl'>Energeek</h1>
                <p className='font-light text-md text-zinc-500'>2019 - Current</p>
                <ul className='list-disc list-inside text-sm font-normal text-zinc-600'>
                    <li>aaa</li>
                    <li>aaa</li>
                </ul>
            </div>
        </div>
      </section>

      <section className='grid grid-cols-5 gap-x-4 border-t border-zinc-200'>
        <div className='col-span-2 mt-6'>
            <h1 className='text-4xl font-bold leading-none'>Lets Connect Digitaly</h1>
        </div>
        <div className='col-span-3 mt-6'>
            <div className='grid grid-cols-1 text-right'>
                <a href='/' className='text-4xl font-bold'>Linkedin</a>
                <a href='/' className='text-4xl font-bold'>Mail</a>
                <a href='/' className='text-4xl font-bold'>Github</a>
                <a href='/' className='text-4xl font-bold'>Dribbble</a>
                <a href='/' className='text-4xl font-bold'>Instagram</a>
            </div>
        </div>
      </section>
    </div>
  )
}
