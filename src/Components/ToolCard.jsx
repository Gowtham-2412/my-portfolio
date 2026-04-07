import React from 'react'

const ToolCard = ({ tool, logo }) => {
  return (
    <div className='flex items-center gap-3 rounded-full border border-[var(--border)] bg-white/[0.03] px-4 py-3 backdrop-blur-xl transition-colors duration-300 hover:border-[rgba(79,124,255,0.36)] hover:bg-[rgba(79,124,255,0.08)]'>
      <div className='flex h-9 w-9 items-center justify-center rounded-full border border-white/5 bg-white/[0.04]'>
        <img src={logo} alt={tool} className='h-4 w-4 grayscale brightness-125' />
      </div>
      <p className='text-sm font-medium text-[var(--headingprimary)]'>{tool}</p>
    </div>
  )
}

export default ToolCard
