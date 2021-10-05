import React from 'react'
import AppBar from '../AppBar/AppBar'
import Footer from './Footer'

const Layout = ({ children }) => {
  return (
    <div className="h-full">
      <AppBar />
      <main>{children}</main>
      <Footer />
    </div>
  )
}

export default Layout
