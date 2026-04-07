import React from 'react'
import { motion } from 'framer-motion'
import connect from '../assets/posticon.svg'
import linkedin from '../assets/linkedinwhite.svg'
import twitter from '../assets/twitterwhite.svg'
import github from '../assets/githubwhite.svg'
import facebook from '../assets/facebookwhite.svg'
import responsive from '../assets/responsive.svg'
import { Send } from 'lucide-react'

const Hero = () => {
  const socialLinks = [
    { icon: github, href: 'https://github.com/Gowtham-2412', label: 'GitHub' },
    { icon: facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: twitter, href: 'https://x.com/', label: 'Twitter' },
    { icon: linkedin, href: 'https://linkedin.com/in/sai-gowtham-konijeti', label: 'LinkedIn' },
  ]

  const stats = [
    { value: '10+', label: 'Months' },
    { value: '5+', label: 'Projects' },
    { value: '3+', label: 'Big Projects' },
  ]

  return (
    <section id='hero' className='section-shell'>
      <div className='grid min-h-[calc(100vh-5rem)] items-center gap-16 lg:grid-cols-[1.15fr_0.85fr]'>
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.45, ease: 'easeOut' }}
        >
          <span className='section-kicker'>Full Stack Developer</span>
          <p className='mt-8 text-sm font-semibold uppercase tracking-[0.26em] text-[var(--texttertiary)] md:text-base'>
            Hello, I&apos;m
          </p>
          <h1 className='mt-4 text-5xl font-extrabold leading-[0.92] tracking-[-0.06em] text-[var(--headingprimary)] sm:text-7xl'>
            Sai <br />
            <span className='text-[var(--accent)]'>Gowtham</span>
          </h1>
          <p className='mt-8 text-lg font-semibold tracking-[0.02em] text-[var(--headingprimary)] md:text-xl'>
            Full stack web developer building reliable, user-centered products.
          </p>
          <p className='mt-5 max-w-2xl text-base leading-8 text-[var(--textsecondary)] md:text-lg'>
            I create polished digital experiences with a balance of clean interface design,
            performance, and practical product thinking across the full stack.
          </p>

          <div className='mt-10 flex flex-wrap items-center gap-4'>
            <a href="#projects" className='primary-button min-w-44'>
              View My Work
            </a>
            <a href="#contact" className='ghost-button min-w-44 gap-2'>
              Let&apos;s Connect
              <Send fill='#fff' size={20} opacity={0.8}/>
            </a>
          </div>

          <div className='mt-10 flex flex-wrap gap-4'>
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target='_blank'
                rel='noreferrer'
                className='icon-shell'
                aria-label={link.label}
              >
                <img src={link.icon} className='w-5 opacity-90' alt="" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5, delay: 0.08, ease: 'easeOut' }}
          className='flex flex-col items-center justify-center'
        >
          <div className='flex w-full items-center justify-center'>
            <img src={responsive} className='w-[320px] max-w-full opacity-95' alt="Responsive development illustration" />
          </div>

          <div className='section-divider mt-10' />
          <div className='mt-8 flex w-full flex-wrap items-center justify-center gap-y-4 text-center sm:justify-between'>
            {stats.map((stat) => (
              <div key={stat.label} className='inline-stat min-w-[110px]'>
                <p className='text-3xl font-extrabold tracking-[-0.04em] text-[var(--accent)]'>{stat.value}</p>
                <p className='mt-2 text-sm font-medium text-[var(--textsecondary)]'>{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
