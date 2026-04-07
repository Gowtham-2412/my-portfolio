import React, { useState } from 'react'
import menuicon from '../assets/menuicon.svg'
import cross from '../assets/crossicon.svg'

const Navbar = () => {
    const [menu, setMenu] = useState(false)

    const navLinks = [
        { label: 'Home', href: '#hero' },
        { label: 'About', href: '#about' },
        { label: 'Skills', href: '#skills' },
        { label: 'Projects', href: '#projects' },
        { label: 'Contact', href: '#contact' },
    ]

    const handleNavigate = (href) => {
        setMenu(false)

        if (href === '#hero') {
            window.scrollTo({ top: 0, behavior: 'smooth' })
            return
        }

        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }

  return (
        <nav className='mx-auto w-[90%] max-w-7xl relative flex h-20 items-center justify-between'>
            <button type='button' className='font-display text-2xl font-extrabold tracking-[-0.04em] text-[var(--headingprimary)]' onClick={() => handleNavigate('#hero')}>
                Sai
                <span className='text-[var(--accent)]'> Gowtham</span>
            </button>

            <div className='hidden items-center gap-2 md:flex'>
                {navLinks.map((link) => (
                    <button
                        key={link.label}
                        type='button'
                        className='rounded-xl px-4 py-2 text-sm font-medium text-[var(--textsecondary)] transition-colors duration-200 hover:bg-white/[0.05] hover:text-[var(--headingprimary)]'
                        onClick={() => handleNavigate(link.href)}
                    >
                        {link.label}
                    </button>
                ))}
            </div>

            <button type='button' onClick={() => setMenu(!menu)} className='rounded-xl border border-[var(--border)] bg-white/[0.03] p-3 md:hidden'>
                <img src={menu ? cross : menuicon} className='w-4 invert' alt="Menu" />
            </button>

            {menu && (
                <div className='panel absolute right-0 top-[5.5rem] flex w-full flex-col gap-2 p-3 md:hidden'>
                    {navLinks.map((link) => (
                        <button
                            key={link.label}
                            type='button'
                            className='w-full rounded-xl px-4 py-3 text-left text-sm font-medium text-[var(--textsecondary)] transition-colors duration-200 hover:bg-white/[0.05] hover:text-[var(--headingprimary)]'
                            onClick={() => handleNavigate(link.href)}
                        >
                            {link.label}
                        </button>
                    ))}
                </div>
            )}
        </nav>
  )
}

export default Navbar
