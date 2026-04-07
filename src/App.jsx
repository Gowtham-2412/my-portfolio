import React from 'react'
import Header from './Sections/Header'
import Hero from './Sections/Hero'
import About from './Sections/About'
import Skills from './Sections/Skills'
import Projects from './Sections/Projects'
import Contact from './Sections/Contact'

const App = () => {
  return (
    <div className='min-h-screen bg-[var(--background)] text-[var(--textprimary)]'>
      <Header/>
      <Hero/>
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
    </div>
  )
}

export default App
