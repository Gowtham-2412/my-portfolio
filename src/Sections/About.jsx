import React from 'react'
import { motion } from 'framer-motion'
import profile from '../assets/profilephoto2.png'

const About = () => {
  const handleDownload = () => {
    const link = document.createElement('a')
    link.href = `${import.meta.env.BASE_URL}Intern_Resume.pdf`
    link.download = 'Gowtham_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handleKnowMore = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id='about' className='section-shell section-spacing overflow-hidden py-20'>
      <div className='text-center'>
        <span className='section-kicker'>About</span>
        <h1 className='section-title mt-6'>A calm, product-minded builder.</h1>
        <p className='section-subtitle'>
          I care about clarity, performance, and building software that feels dependable from the first interaction.
        </p>
      </div>

      <div className='mt-16 grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr]'>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
          className='overflow-hidden'
        >
          <img src={profile} alt="Portrait of Sai Gowtham" className='rounded-[24px] border border-[var(--border)] bg-white/[0.02]' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.48, delay: 0.06, ease: 'easeOut' }}
          className='border-t border-[var(--border)] pt-8 md:pt-10'
        >
          <h2 className='text-3xl font-bold tracking-[-0.04em] text-[var(--headingprimary)] max-md:text-center'>
            Passionate <span className='text-[var(--accent)]'>Web</span> Developer
          </h2>

          <div className='mt-6 flex flex-col gap-5 text-base leading-8 text-[var(--textsecondary)]'>
            <p>
              With over 4 months of experience in web development, I specialize in creating modern,
              responsive websites and web applications that deliver exceptional user experiences.
            </p>
            <p>
              My journey began with a curiosity about how websites work, and it has evolved into a
              passion for crafting digital solutions that make a real impact. I believe in writing
              clean, efficient code and staying up-to-date with the latest technologies.
            </p>
          </div>

          <div className='mt-8 flex flex-wrap gap-4 max-md:justify-center'>
            <button className='primary-button min-w-44' onClick={handleDownload}>
              Download Resume
            </button>
            <button type='button' className='ghost-button min-w-36' onClick={handleKnowMore}>
              Know More
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
