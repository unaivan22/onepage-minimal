import React from 'react'

export default function Nav() {
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded">
        <div className="container flex flex-wrap justify-between items-center mx-auto">
            <a href="https://flowbite.com/" className="flex items-center">
                <img src="assets/media/Avatar.png" className="mr-3 h-6 sm:h-9" />
                <span className="self-center text-xl font-semibold whitespace-nowrap text-black">Ivan</span>
            </a>
            <div className=" w-full md:block md:w-auto" id="navbar-default">
                <ul className="flex flex-col p-4 mt-4 ">
                    <li>
                    <a href="/" className="block py-2 pr-4 pl-3 text-black" aria-current="page">Resume</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
  )
}
