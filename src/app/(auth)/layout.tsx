import React from 'react'

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex justify-center items-center min-h-screen w-full bg-auth'>{children}</main>
  )
}
export default Layout
