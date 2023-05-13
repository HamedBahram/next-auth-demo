'use client'

import { updateName } from '../_actions'
import { useSession } from 'next-auth/react'

import { ToastContainer, toast } from 'react-toastify'

const UserProfileForm = () => {
  const { data: session, update } = useSession()

  async function handleSubmit(formData) {
    const { name, email } = Object.fromEntries(formData.entries())

    if (!name || !email) return

    // Server action
    await updateName(name, email)

    // Update next-auth session
    await update({ name })

    // Show a toast notification
    toast('Your name has been updated successfully.', {
      theme: 'dark',
      type: 'success',
      autoClose: 2000
    })
  }

  return (
    <div className='mt-12 w-2/3 rounded p-8 shadow-lg lg:w-1/2'>
      <h2 className='mb-6 text-lg font-medium'>Update your info</h2>

      <form action={handleSubmit} className='flex justify-between gap-3'>
        <input type='hidden' name='email' value={session?.user?.email} />
        <input
          type='text'
          name='name'
          className='flex-1 border px-2 py-1'
          defaultValue={session?.user?.name}
        />
        <button className='rounded bg-slate-700 px-3 py-1 text-white'>
          Update
        </button>
      </form>

      <ToastContainer />
    </div>
  )
}

export default UserProfileForm
