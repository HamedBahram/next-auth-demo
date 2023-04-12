'use client'

import { SessionProvider } from 'next-auth/react'

const Provider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default Provider
