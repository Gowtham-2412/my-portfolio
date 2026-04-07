import React from 'react'
import { motion } from 'framer-motion'

const SkillCard = ({ skill, image, experience }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className='skill-row'
    >
      <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-white/[0.02]'>
        <img src={image} alt={skill} className='h-6 w-6 grayscale brightness-125' />
      </div>
      <div className='min-w-0'>
        <h2 className='text-lg font-semibold tracking-[-0.03em] text-[var(--headingprimary)]'>{skill}</h2>
        <div className='mt-3 h-1.5 w-full rounded-full bg-white/[0.06]'>
          <div
            className='h-1.5 rounded-full bg-[linear-gradient(90deg,#4f7cff_0%,#7aa2ff_100%)]'
            style={{ width: `${experience}%` }}
          />
        </div>
      </div>
      <p className='text-sm font-semibold text-[var(--headingsecondary)]'>{experience}%</p>
    </motion.div>
  )
}

export default SkillCard
