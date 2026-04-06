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
  return (
    <>
        <section id='skills' className='bg-[var(--skillsection)] md:mt-40 mt-20 min-h-screen py-4'>
            <h1 className='text-4xl font-bold text-center text-gray-200 mt-10'>Skills & Technologies</h1>
            <div className='my-20 w-4/5 mx-auto'>
                <h1 className='text-gray-300 text-3xl font-bold text-center mb-4'>Frontend Development</h1>
                <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                    <SkillCard skill="HTML" image={html} experience="100"/>
                    <SkillCard skill="CSS" image={css} experience="80"/>
                    <SkillCard skill="JS" image={js} experience="70"/>
                    <SkillCard skill="React" image={react} experience="80"/>
                    <SkillCard skill="Figma" image={figma} experience="40"/>
                </div>
            </div>
            <div className=' w-4/5 mx-auto'>
              <h1 className='text-gray-300 text-3xl font-bold text-center mb-4'>Backend Development</h1>
              <div className='mt-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
                <SkillCard skill="Node.js" image={node} experience="75"/>
                <SkillCard skill="Mongo DB" image={mongodb} experience="70"/>
                <SkillCard skill="PostgreSQL" image={postgres} experience="40"/>
              </div>
            </div>
            <h1 className='text-3xl font-bold text-center text-gray-200 mt-20'>Tools→</h1>
            <div className='w-4/5 mx-auto flex justify-center items-center gap-6 flex-wrap my-14'>
              <ToolCard tool="Tailwind" logo={tailwind}/>
              <ToolCard tool="Git" logo={git}/>
              <ToolCard tool="Photoshop" logo={ps}/>
              <ToolCard tool='Postman' logo={postman}/>
              <ToolCard tool='ChatGPT' logo={openai}/>
              <ToolCard tool='Gemini' logo={gemini}/>
              <ToolCard tool='Perplexity' logo={perplexity}/>
            </div>
        </section>
    </>
  )
}

export default Skills
