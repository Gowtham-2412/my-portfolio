import React, { useState } from 'react'
import menuicon from '../assets/menuicon.svg'
import cross from '../assets/crossicon.svg'

const Navbar = () => {

    const [menu, setMenu] = useState(false);


  return (
    <>
        <div className='sm:w-4/5 mx-auto flex justify-between max-sm:px-3 py-1.5 relative items-center'>
            <h1 className='text-[var(--headingprimary)] font-bold text-2xl'>
                Sai
                <span className='text-[var(--headingsecondary)]'> Gowtham</span>
            </h1>
            <div className='flex gap-1 items-center font-medium max-md:hidden'>
                <a className='p-2 hover:bg-gray-200 rounded-md cursor-pointer' onClick={()=>scrollTo(top)} >Home</a>
                <a className='p-2 hover:bg-gray-200 rounded-md cursor-pointer' onClick={()=>document.getElementById('about').scrollIntoView()}>About</a>
                <a className='p-2 hover:bg-gray-200 rounded-md cursor-pointer' href="#skills">Skills</a>
                <a className='p-2 hover:bg-gray-200 rounded-md cursor-pointer' href="#projects">Projects</a>
                <a className='p-2 hover:bg-gray-200 rounded-md cursor-pointer' href="#contact">Contact</a>
            </div>
            <img onClick={() => setMenu(!menu)} src={menu?cross:menuicon} className='w-5 md:hidden' alt="" />
            {
                menu && (
                    <div onClick={()=>setMenu(false)} className='absolute top-12 right-0 w-full h-auto pb-5 pt-3 px-3 flex flex-col gap-1.5 bg-[var(--background)]'>
                        <a href="" className='font-medium w-full py-1'>Home</a>
                        <a href="#about" className='font-medium w-full py-1'>About</a>
                        <a href="#skills" className='font-medium w-full py-1'>Skills</a>
                        <a href="#projects" className='font-medium w-full py-1'>Projects</a>
                        <a href="#contact" className='font-medium w-full py-1'>Contact</a>
                    </div>
                )
            }
        </div>
    </>
  )
}

export default Navbar
