import React from 'react'
import ContactForm from '../Components/ContactForm'
import mail from '../assets/mailwhite.svg'
import phone from '../assets/phonewhite.svg'
import place from '../assets/locationwhite.svg'
import linkedin from '../assets/linkedinwhite.svg'
import twitter from '../assets/twitterwhite.svg'
import github from '../assets/githubwhite.svg'
import facebook from '../assets/facebookwhite.svg'

const Contact = () => {
  const contacts = [
    { icon: mail, label: 'Email', value: 'sgowtham.konijeti@gmail.com' },
    { icon: phone, label: 'Phone', value: '+91 9502323161' },
    { icon: place, label: 'Location', value: 'Nellore, Andhra Pradesh' },
  ]

  const socialLinks = [
    { icon: github, href: 'https://github.com/Gowtham-2412', label: 'GitHub' },
    { icon: facebook, href: 'https://www.facebook.com/', label: 'Facebook' },
    { icon: twitter, href: 'https://x.com/', label: 'Twitter' },
    { icon: linkedin, href: 'https://linkedin.com/in/sai-gowtham-konijeti', label: 'LinkedIn' },
  ]

  return (
    <section id='contact' className='section-shell section-spacing scroll-mt-24'>
      <div className='text-center'>
        <span className='section-kicker'>Contact</span>
        <h1 className='section-title mt-6'>Open to thoughtful opportunities.</h1>
        <p className='section-subtitle'>Ready to start your next project? Let&apos;s talk.</p>
      </div>

      <div className='mt-16 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]'>
        <div>
          <h2 className='text-3xl font-bold tracking-[-0.04em] text-[var(--headingprimary)]'>
            Let&apos;s Work Together
          </h2>
          <p className='mt-4 text-base leading-8 text-[var(--textsecondary)]'>
            I&apos;m always interested in new opportunities and exciting projects. Whether you need
            a complete website, web application, or just want to say hello, feel free to reach out.
          </p>

          <div className='section-divider mt-10' />
          <div className='mt-8 flex flex-col gap-5'>
            {contacts.map((item) => (
              <div key={item.label} className='flex items-center gap-4'>
                <div className='flex h-12 w-12 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--accentsoft)]'>
                  <img src={item.icon} alt="" className='w-5' />
                </div>
                <div>
                  <p className='text-lg font-semibold text-[var(--headingprimary)]'>{item.label}</p>
                  <p className='mt-1 text-sm text-[var(--textsecondary)]'>{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className='mt-10'>
            <p className='text-sm font-semibold uppercase tracking-[0.24em] text-[var(--texttertiary)]'>Follow Me</p>
            <div className='mt-4 flex flex-wrap gap-3'>
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target='_blank'
                  rel='noreferrer'
                  className='icon-shell'
                  aria-label={link.label}
                >
                  <img src={link.icon} className='w-5 opacity-90' alt="" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div>
          <ContactForm />
        </div>
      </div>
    </section>
  )
}

export default Contact
