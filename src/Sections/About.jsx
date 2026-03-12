import React from 'react'
import profile from '../assets/profilephoto2.png'

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = `${import.meta.env.BASE_URL}Intern_Resume.pdf`;
    link.download = 'Gowtham_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <section id='about' className="w-full overflow-hidden min-h-screen py-6">
      <h1 className='font-extrabold text-4xl text-[--headingsecondary] text-center mb-5'>About Me</h1>
      <p className='text-center text-[--textsecondary] font-medium text-lg mb-5'>Know the person behind the code</p>
      <div className='mx-auto w-[90%] flex flex-col md:flex-row items-center justify-between gap-8'>
        <div className='md:w-2/5 w-1/2 shadow-md rounded-xl border'>
          <img src={profile} alt="" className='' />
        </div>
        <div className='flex flex-col justify-between gap-8 md:w-3/4 w-full p-3'>
          <h2 className='text-2xl font-bold text-gray-700 max-md:text-center'>Passionate <span className='text-[var(--headingsecondary)]'>Web</span> Developer</h2>
          <div className='flex flex-col items-start max-md:mx-auto md:items-start gap-5 text-gray-500 font-medium sm:w-4/5'>
            <p className=''>
              With over 4 months of experience in web development, I specialize in creating modern, responsive websites and web applications that deliver exceptional user experiences.
            </p>
            <p className=''>
              My journey began with a curiosity about how websites work, and it has evolved into a passion for crafting digital solutions that make a real impact. I believe in writing clean, efficient code and staying up-to-date with the latest technologies.
            </p>
          </div>
          <div className='flex md:justify-start justify-center gap-8 max-sm:text-sm'>
            <button
              className='font-medium py-3 border-[3px] rounded-3xl w-40 border-blue-400 hover:bg-blue-300 hover:border-blue-200 active:bg-blue-500 hover:-translate-y-1 scale-105 transition-all duration-300 ease-linear'
              onClick={handleDownload}
            >
              Download Resume
            </button>
            <button className='font-medium w-32 text-white bg-[#444747] border-2 border-gray-500 rounded-3xl hover:bg-transparent hover:text-gray-700 transition-colors duration-300 active:bg-gray-300'>Know More</button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;