import React from 'react'
import SkillCard from '../Components/SkillCard'
import ToolCard from '../Components/ToolCard'
import html from '../assets/htmllogo.svg'
import css from '../assets/csslogo.svg'
import js from '../assets/javascriptlogo.svg'
import react from '../assets/reactlogo.svg'
import node from '../assets/nodejslogo.svg'
import mongodb from '../assets/mongodblogo.svg'
import ps from '../assets/photoshoplogo.svg'
import tailwind from '../assets/tailwindlogo.svg'
import git from '../assets/gitlogo.svg'
import figma from '../assets/figma.svg'
import postgres from '../assets/postgresql.svg'
import postman from '../assets/postman.svg'
import openai from '../assets/openai.svg'
import gemini from '../assets/gemini.svg'
import perplexity from '../assets/perplexity.svg'

const Skills = () => {
  const frontendSkills = [
    { skill: 'HTML', image: html, experience: '100' },
    { skill: 'CSS', image: css, experience: '80' },
    { skill: 'JavaScript (ES6+)', image: js, experience: '70' },
    { skill: 'React.js', image: react, experience: '80' },
  ]

  const backendSkills = [
    { skill: 'Node.js (REST API)', image: node, experience: '75' },
    { skill: 'Mongo DB', image: mongodb, experience: '70' },
    { skill: 'PostgreSQL', image: postgres, experience: '40' },
  ]

  const tools = [
    { tool: 'Tailwind', logo: tailwind },
    { tool: 'Figma', logo: figma},
    { tool: 'Git', logo: git },
    { tool: 'Photoshop', logo: ps },
    { tool: 'Postman', logo: postman },
    { tool: 'ChatGPT', logo: openai },
    { tool: 'Gemini', logo: gemini },
    { tool: 'Perplexity', logo: perplexity },
  ]

  return (
    <section id='skills' className='section-shell pb-10 scroll-m-16'>
      <div className='text-center'>
        <span className='section-kicker'>Skills</span>
        <h1 className='section-title mt-6'>Focused on modern web delivery.</h1>
        <p className='section-subtitle'>
          A clean, readable stack presentation with restrained surfaces, monochrome icon treatment,
          and just enough emphasis on the tools I use most.
        </p>
      </div>

      <div className='mt-16 space-y-16'>
        <div>
          <div className='flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[var(--texttertiary)]'>Frontend</p>
              <h2 className='mt-2 text-3xl font-bold tracking-[-0.04em]'>Interface Development</h2>
            </div>
            <p className='max-w-xl text-sm leading-7 text-[var(--textsecondary)]'>
              Responsive UI implementation with a preference for clarity, strong hierarchy, and maintainable component structure.
            </p>
          </div>
          <div className='section-divider mt-8' />
          <div className='mt-4 grid grid-cols-1 gap-x-10 sm:grid-cols-2'>
            {frontendSkills.map((item) => (
              <SkillCard key={item.skill} {...item} />
            ))}
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[var(--texttertiary)]'>Backend</p>
              <h2 className='mt-2 text-3xl font-bold tracking-[-0.04em]'>Data and Application Logic</h2>
            </div>
            <p className='max-w-xl text-sm leading-7 text-[var(--textsecondary)]'>
              Server-side development with an emphasis on clean APIs, reliable data handling, and practical full-stack integration.
            </p>
          </div>
          <div className='section-divider mt-8' />
          <div className='mt-4 grid grid-cols-1 gap-x-10 sm:grid-cols-2'>
            {backendSkills.map((item) => (
              <SkillCard key={item.skill} {...item} />
            ))}
          </div>
        </div>

        <div>
          <div className='flex flex-col gap-3 md:flex-row md:items-end md:justify-between'>
            <div>
              <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[var(--texttertiary)]'>Toolkit</p>
              <h2 className='mt-2 text-3xl font-bold tracking-[-0.04em]'>Everyday Tools</h2>
            </div>
            <p className='max-w-xl text-sm leading-7 text-[var(--textsecondary)]'>
              Supporting tools that streamline design handoff, development workflow, testing, and daily problem solving.
            </p>
          </div>
          <div className='section-divider mt-8' />
          <div className='mt-10 flex flex-wrap gap-3'>
            {tools.map((item) => (
              <ToolCard key={item.tool} {...item} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills
