import React from 'react'
import Navbar from '../Components/Navbar'

const Header = () => {

  return (
    <header id='navbar' className='sticky top-0 z-50 w-full border-b border-[var(--border)] bg-[rgba(11,17,32,0.78)] backdrop-blur-xl'>
      <Navbar/>
    </header>
  )
}

export default Header
