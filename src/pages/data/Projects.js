import React, { Component } from 'react'
import data from './data.json'

class Projects extends Component {
	render() {
		return (
            <div className='grid xl:grid-cols-2 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-12 gap-y-16'>
                { data.Proj.map((projectSelected) => {
						return (
                            <div className='rounded-xl' key={projectSelected.id}>
                                <img className='rounded-xl' src={projectSelected.img} />
                                <h3 className='font-bold text-black text-2xl mt-4'>{projectSelected.title}</h3>
                                <p className='font-light text-zinc-600'>{projectSelected.company}</p>
                            </div>
						);
					})
				}
            </div>
        );
    }
} 
export default Projects;