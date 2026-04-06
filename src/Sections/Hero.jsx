import React from 'react'
import { easeIn, motion } from 'framer-motion'
import connect from '../assets/posticon.svg'
import linkedin from '../assets/linkedin.svg'
import twitter from '../assets/twitter.svg'
import github from '../assets/github.svg'
import facebook from '../assets/facebook.svg'
import responsive from '../assets/responsive.svg'

const Hero = () => {
    return (
        <section id='hero' className='min-h-screen'>
            <div className='w-4/5 mx-auto flex max-lg:flex-col justify-between py-10'>
                <div className='lg:w-1/2'>
                    <p className='text-[var(--textprimary)] font-medium text-xl mb-1'>Hello I'm,</p>
                    <h1 className='sm:text-7xl font-bold text-[var(--headingprimary)] text-5xl'>Sai <br /><span className='text-[var(--headingsecondary)] my-2'>Gowtham</span></h1>
                    <p className='text-xl my-8 tracking-wide font-[600]'>Full stack web developer</p>
                    <p className='text-[var(--textsecondary)] text-lg mb-10'>I create exceptional digital experiences that combine beautiful design with powerful functionality. Specializing in modern web technologies and user-centered solutions.</p>
                    <div className='flex gap-8 items-center max-sm:flex-col max-sm:gap-0'>
                        <a href="#projects">
                            <motion.button
                                className='bg-gradient-to-br from-[#668bd9] to-[#a0b9d3] text-[#272929] font-medium lg:text-xl text-lg py-3.5 min-w-48 my-5 rounded-full'
                                whileTap={{ scale: 0.97 }}
                                whileHover={{translateY: "-3px", color: "black"}}
                                transition={{duration:0.2, ease: easeIn}}
                                >
                                View My Work →
                            </motion.button>
                        </a>
                        <a href="#contact">
                            <motion.button
                                className='border-2 border-gray-500 text-[#272929] font-medium text-lg  py-3.5 min-w-48 my-5 rounded-full flex justify-center gap-1'
                                whileTap={{ scale: 0.97 }}
                                whileHover={{translateY: "-3px", color: "black", backgroundColor: "#d5dbdf"}}
                                transition={{duration:0.2, ease: easeIn}}
                                >
                                Lets Connect
                                <img src={connect} alt="" className='w-6'/>
                            </motion.button>
                        </a>
                    </div>
                    <div className='mt-4 flex gap-5 items-center'>
                        <div className='w-12 h-12 border border-black p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-105'>
                            <a href="https://github.com/Gowtham-2412" target='blank'>
                                <img src={github} className='w-6' />
                            </a>
                        </div>
                        <div className='w-12 h-12 border border-black p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-105'>
                            <a href="https://www.facebook.com/" target='blank'>
                                <img src={facebook} className='w-6' />
                            </a>
                        </div>
                        <div className='w-12 h-12 border border-black p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-105'>
                            <a href="https://x.com/" target='blank'>
                                <img src={twitter} className='w-6' />
                            </a>
                        </div>
                        <div className='w-12 h-12 border border-black p-2 rounded-full flex justify-center items-center cursor-pointer hover:bg-gray-200 hover:scale-105'>
                            <a href="https://linkedin.com/in/sai-gowtham-konijeti" target='blank'>
                                <img src={linkedin} className='w-6' />
                            </a>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col items-center justify-center lg:w-1/2 max-lg:mt-16'>
                <div className='w-auto'>
                   <img src={responsive} className='w-[280px] max-sm:w-[240px]' />
                   <div className='flex justify-around items-center w-full'>
                        <div className='flex flex-col justify-center items-center text-[var(--info)]'>
                            <p className='font-bold text-3xl'>10+</p>
                            <p className='font-medium text-sm'>Months</p>
                        </div>
                        <div className='flex flex-col justify-center items-center text-[var(--info)]'>
                            <p className='font-bold text-3xl'>5+</p>
                            <p className='font-medium text-sm'>Projects</p>
                        </div>
                        <div className='flex flex-col justify-center items-center text-[var(--info)]'>
                            <p className='font-bold text-3xl'>3+</p>
                            <p className='font-medium text-sm'>Big Projects</p>
                        </div>
                   </div>
                </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
