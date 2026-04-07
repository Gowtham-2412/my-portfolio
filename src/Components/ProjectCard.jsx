import React from 'react'
import { motion } from 'framer-motion'
import github from '../assets/githubwhite.svg'

const ProjectCard = ({ preview, title, description, tech, githublink }) => {
  const hasGithubLink = Boolean(githublink)

  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.32, ease: 'easeOut' }}
      className='group flex h-full flex-col overflow-hidden rounded-[12px] border border-[var(--border)] bg-white/[0.02]'
    >
      <div className='overflow-hidden'>
        <img src={preview} alt={title} className='h-[220px] w-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.01]' />
      </div>

      <div className='flex flex-1 flex-col p-6'>
        <h2 className='text-2xl font-bold tracking-[-0.04em] text-[var(--headingprimary)]'>{title}</h2>
        <p className='mt-3 text-sm leading-7 text-[var(--textsecondary)]'>{description}</p>

        <div className='mt-5 flex flex-wrap gap-2'>
          {tech?.map((item) => (
            <span
              key={item}
              className='rounded-full border border-[var(--border)] bg-white/[0.03] px-3 py-1 text-xs font-medium text-[var(--textsecondary)]'
            >
              {item}
            </span>
          ))}
        </div>

        <div className='mt-6'>
          {hasGithubLink ? (
            <a
              href={githublink}
              target='_blank'
              rel='noreferrer'
              className='ghost-button w-full justify-center gap-2'
            >
              <img src={github} alt="" className='w-4 opacity-90' />
              View Source
            </a>
          ) : (
            <div className='ghost-button w-full cursor-not-allowed justify-center opacity-60'>
              Source Unavailable
            </div>
          )}
        </div>
      </div>
    </motion.article>
  )
}

export default ProjectCard
