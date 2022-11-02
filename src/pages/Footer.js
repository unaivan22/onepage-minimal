import React from 'react'

export default function Footer() {
  return (
    <div className='grid gap-y-12'>
      <section className='grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 xs:grid-cols-1 gap-x-12'>
        <div className='col-span-2 mb-12'>
            <h1 className='text-4xl font-bold leading-none mb-2'>Get in touch</h1>
            <p className='mb-6 text-zinc-600 text-lg mb-8'>Let’s talk about anything from design, accessibility, prototyping, and technology.</p>
            <a href='mailto:yourmail@gmail.com' className="bg-zinc-900 text-white font-bold py-3 px-6 rounded-full text-lg">
                Send a message
            </a>
        </div>
        <div className='col-span-3'>
            <div className='mb-12'>
                <h1 className='font-bold text-2xl'>Apple</h1>
                <h3 className='font-bold text-md'>UX Engineer</h3>
                <p className='font-light text-md text-zinc-500'>March 2019 - Current</p>
                <ul className='list-disc list-inside text-sm font-normal text-zinc-600'>
                    <li>Leads the team in establishing the architectural design of new features and improvement of existing features</li>
                    <li>Improves team processes and expertise by participating in designs and code reviews, and by suggesting new processes and tools</li>
                    <li>Owns expertise in specific technology areas relevant to the project</li>
                    <li>Actively engages with developing industry tools and practices in order to remain current</li>
                    <li>Writes readable, maintainable, and test-covered code, setting high standards for the team</li>
                    <li>Contributes to architectural design of new features and improvement of existing features</li>
                </ul>
            </div>
            <div className='mb-12'>
                <h1 className='font-bold text-2xl'>Microsoft</h1>
                <h3 className='font-bold text-md'>UI Engineer</h3>
                <p className='font-light text-md text-zinc-500'>July 2017 - February 2019</p>
                <ul className='list-disc list-inside text-sm font-normal text-zinc-600'>
                    <li>Meeting with the design team to discuss application features and design ideas</li>
                    <li>Researching similar application designs and user interface modules</li>
                    <li>Creating a website and application design mockups with enhanced UI features</li>
                    <li>Presenting updated front-end designs for final sign-off</li>
                    <li>Writing the front-end code and building the user interface</li>
                    <li>Debugging code errors and troubleshooting software issues</li>
                    <li>Conducting live application tests and tweaks</li>
                    <li>Updating web applications in line with user trends</li>
                </ul>
            </div>
            <div className='mb-12'>
                <h1 className='font-bold text-2xl'>Amazon</h1>
                <h3 className='font-bold text-md'>UI/UX Designer</h3>
                <p className='font-light text-md text-zinc-500'>January 2012 - June 2017</p>
                <ul className='list-disc list-inside text-sm font-normal text-zinc-600'>
                    <li>Consulting with Product Manager and Lead Engineer to understand clients goals and explaining research results</li>
                    <li>Conducting usability testing or A/B testing</li>
                    <li>Creating wireframes, storyboards, sitemaps and screen flows</li>
                    <li>Creating product prototypes</li>
                    <li>Developing personas and usage scenarios</li>
                    <li>Analyzing users feedback and activity, and iterating to enhance the user experience</li>
                    <li>Supports</li>
                </ul>
            </div>
        </div>
      </section>

      <section className='grid xl:grid-cols-5 lg:grid-cols-5 md:grid-cols-5 sm:grid-cols-1 xs:grid-cols-1 gap-x-4 border-t border-zinc-200 mb-12'>
        <div className='col-span-4 mt-6'>
            <h1 className='text-7xl font-bold leading-none'>Lets Connect <br /> Digitaly</h1>
            <p className='mt-12 text-zinc-500'><span>{(new Date().getFullYear())}</span> Crafted in Surabaya by Dinivan Nendra</p>
        </div>
        <div className='col-span-1 mt-6'>
            <div className='grid grid-cols-1 text-right sm:text-left xs:text-left'>
                <a href='https://www.linkedin.com' className='text-4xl font-bold'>Linkedin</a>
                <a href='mailto:yourmail@gmail.com' className='text-4xl font-bold'>Mail</a>
                <a href='https://github.com' className='text-4xl font-bold'>Github</a>
                <a href='https://dribbble.com' className='text-4xl font-bold'>Dribbble</a>
                <a href='https://www.instagram.com/' className='text-4xl font-bold'>Instagram</a>
            </div>
        </div>
      </section>
    </div>
  )
}
