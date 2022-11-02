import React from 'react'

export default function Footer() {
  return (
    <div>
      <div className='grid grid-cols-5 gap-x-4'>
        <div className='col-span-2'>
            <h1 className='text-4xl font-bold leading-none'>Frequently asked questions</h1>
            <p>If anything else, send us a message below. </p>
            <button class="bg-zinc-900 text-white font-bold py-2 px-4 rounded-full">
                Send a message
            </button>
        </div>
        <div className='col-span-3'>
            <div className=''>
                <h1>Energeek</h1>
                <p>2019 - Current</p>
                <ul className='list-disc'>
                    <li>aaa</li>
                    <li>aaa</li>
                </ul>
            </div>
        </div>
      </div>
    </div>
  )
}
