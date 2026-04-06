import React from 'react'
import github from '../assets/githubwhite.svg'

const ProjectCard = ({preview, title, description, tech, githublink}) => {
  return (
    <div className='rounded-2xl bg-transparent border-2 border-[#2f3f57] shadow-md transition-all duration-300 ease-in hover:-translate-y-2'>
      <div className='relative h-[250px] overflow-hidden rounded-t-2xl group'>
        <img src={preview} alt="" className='object-cover w-full h-full'/>
        <div className='absolute left-0 top-full opacity-0 bg-gradient-to-b from-[#02269d]/80 to-[#104782]/80 w-full h-full flex flex-col items-center justify-center gap-4 transition-all duration-500 group-hover:-translate-y-full group-hover:opacity-100'>
          <h2 className='text-2xl font-bold text-[#ffff]'>{title}</h2>
          <p className='text-gray-300 w-4/5 text-center font-medium'>{description}</p>
          <div>
            <a href={githublink} target='blank' className='' aria-disabled={!githublink}>
              <img src={github} alt="" className='w-12 rounded-full bg-[#000106db] p-1.5'/>
            </a>
          </div>
        </div>
      </div>
      <div className='flex justify-start items-center p-6 gap-2 flex-wrap space-y-1'>
        {
            tech && tech.map((element, idx) => (
                <div key={idx} className='rounded-3xl bg-[#428bd423] leading-7 px-2.5 min-w-fit border border-[#62778c] text-xs text-[#2782dd] cursor-pointer'>
                    <p>{element}</p>
                </div>
            ))
        }
      </div>
    </div>
  )
}

export default ProjectCard
