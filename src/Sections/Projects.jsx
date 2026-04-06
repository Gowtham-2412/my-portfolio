import React from 'react'
import ProjectCard from '../Components/ProjectCard'
// import FoodDel from '../assets/teamwork.jpg'
// import ECommerce from '../assets/teamwork.jpg'
import Notes from '../assets/collabnotes.png'
import Job from '../assets/HireUpPreview.png'
import printhub from '../assets/image.png'

const Projects = () => {
  return (
    <section id='projects' className='bg-[#1f2b3e] py-5 pb-16 min-h-screen'>
      <div className='my-16'>
        <h1 className='text-5xl text-[#4780c6] text-center font-bold'>My Projects</h1>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-3/4 mx-auto my-5'>
        <ProjectCard
         preview={Notes}
          title="Real Time Notes"
         description="A Real Time Notes app with socket integration"
         tech={[ "React", "JWT", "MongoDb", "Socket IO", "Node.js"]}
         githublink={'https://github.com/Gowtham-2412/Collab-Notes'}/>
        <ProjectCard
         preview={printhub}
          title="Business system"
         description="Admin controlled smart printing service system designed for small printing shops"
         tech={[ "React", "Node.js", "MongoDb", "Express", "Cloudinary", "JWT"]}
         githublink={'https://github.com/Gowtham-2412/PrintHub'}/>
        <ProjectCard
         preview={Job}
          title="Job Board App"
         description="Full stack Job portal with job applications and hiring Candidates"
         tech={[ "React", "Node.js", "MongoDb", "Cloudinary"]}/>
      </div>
    </section>
  )
}

export default Projects
