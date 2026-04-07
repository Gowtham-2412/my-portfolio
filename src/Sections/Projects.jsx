import React from 'react'
import ProjectCard from '../Components/ProjectCard'
import Notes from '../assets/collabnotes.png'
import Job from '../assets/HireUpPreview.png'
import printhub from '../assets/image.png'

const Projects = () => {
  return (
    <section id='projects' className='section-shell scroll-m-16'>
      <div className='text-center'>
        <span className='section-kicker'>Projects</span>
        <h1 className='section-title mt-6'>Selected work with a practical edge.</h1>
        <p className='section-subtitle'>
          A concise selection of projects that demonstrate a focus on practical, user-centered
        </p>
      </div>

      <div className='mt-16 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3'>
        <ProjectCard
          preview={Notes}
          title='Real Time Notes'
          description='A real-time notes app with socket integration.'
          tech={['React', 'JWT', 'MongoDb', 'Socket IO', 'Node.js']}
          githublink='https://github.com/Gowtham-2412/Collab-Notes'
        />
        <ProjectCard
          preview={printhub}
          title='Business System'
          description='Admin-controlled smart printing service system designed for small printing shops.'
          tech={['React', 'Node.js', 'MongoDb', 'Express', 'Cloudinary', 'JWT']}
          githublink='https://github.com/Gowtham-2412/PrintHub'
        />
        <ProjectCard
          preview={Job}
          title='Job Board App'
          description='Full stack job portal with job applications and hiring workflows.'
          tech={['React', 'Node.js', 'MongoDb', 'Cloudinary']}
        />
      </div>
    </section>
  )
}

export default Projects
