import React, { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'

const ContactForm = () => {
  const formRef = useRef(null)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState({ type: '', message: '' })

  const handleSubmit = async (event) => {
    event.preventDefault()

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        type: 'error',
        message:
          'Email service is not configured. Add VITE_EMAILJS_SERVICE_ID, VITE_EMAILJS_TEMPLATE_ID, and VITE_EMAILJS_PUBLIC_KEY.',
      })
      return
    }

    try {
      setIsSending(true)
      setStatus({ type: '', message: '' })
      await emailjs.sendForm(serviceId, templateId, formRef.current, {
        publicKey,
      })
      setStatus({
        type: 'success',
        message: 'Message sent successfully. I will get back to you soon.',
      })
      formRef.current?.reset()
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again in a moment.',
      })
    } finally {
      setIsSending(false)
    }
  }

  return (
    <div className='panel p-8 md:p-10'>
      <form
        ref={formRef}
        onSubmit={handleSubmit}
        className='flex flex-col gap-5'
      >
        <div className='grid gap-5 md:grid-cols-2'>
          <label htmlFor='name' className='text-sm font-semibold text-[var(--headingprimary)]'>
            Name*
            <input
              type='text'
              id='name'
              name='name'
              required
              placeholder='Your name'
              className='input-shell mt-2'
            />
          </label>

          <label htmlFor='email' className='text-sm font-semibold text-[var(--headingprimary)]'>
            Email*
            <input
              type='email'
              id='email'
              name='email'
              required
              placeholder='you@example.com'
              className='input-shell mt-2'
            />
          </label>
        </div>

        <label htmlFor='subject' className='text-sm font-semibold text-[var(--headingprimary)]'>
          Subject*
          <input
            type='text'
            id='subject'
            name='subject'
            required
            placeholder='Project inquiry'
            className='input-shell mt-2'
          />
        </label>

        <label htmlFor='message' className='text-sm font-semibold text-[var(--headingprimary)]'>
          Message*
          <textarea
            name='message'
            id='message'
            required
            placeholder='Tell me a bit about the project or opportunity.'
            className='input-shell mt-2 min-h-36 resize-y'
          />
        </label>

        {status.message ? (
          <p
            className={`text-sm ${
              status.type === 'success' ? 'text-[var(--success)]' : 'text-[var(--danger)]'
            }`}
          >
            {status.message}
          </p>
        ) : null}

        <button
          type='submit'
          disabled={isSending}
          className='primary-button self-start disabled:cursor-not-allowed disabled:opacity-70'
        >
          {isSending ? 'Sending...' : 'Send Message'}
        </button>
      </form>
    </div>
  )
}

export default ContactForm
