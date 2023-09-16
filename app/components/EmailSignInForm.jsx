'use client'

import { useSearchParams } from 'next/navigation'
import { signIn } from 'next-auth/react'

import TextField from '../components/TextField'
import Button from '../components/Button'

export default function EmailSignInForm() {
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/'

  async function handleSubmit(event) {
    event.preventDefault()
    const formData = new FormData(event.target)
    const email = formData.get('email')
    signIn('resend', { email, callbackUrl })
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className='space-y-2'>
        <TextField
          id='email'
          name='email'
          type='email'
          label='Sign in with your email'
          placeholder='hello@me.com'
          autoComplete='email'
          required
        />
      </div>
      <Button
        type='submit'
        variant='outline'
        color='gray'
        className='mt-3 w-full'
      >
        Continue with email
      </Button>
    </form>
  )
}
