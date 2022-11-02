import React from 'react'

export default function Nav() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" className="flex items-center mt-4">
                <img src="https://avatars.githubusercontent.com/u/25717454?v=4" className="mr-3 h-6 sm:h-9 rounded-full" />
                <span className="self-center text-3xl font-semibold whitespace-nowrap text-black">Ivan</span>
            </a>
            <div className=" md:block md:w-auto">
                <ul className="flex flex-col p-4 mt-4 ">
                    <li>
                    <a href='https://dinivannendragunawan.vercel.app/assets/media/resume/resume-DinivanNendraGunawan.pdf' target='_blank' className="block py-2 pr-4 pl-3 text-black font-bold" aria-current="page">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
