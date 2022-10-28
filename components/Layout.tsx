import React from 'react'
import Nav from './Nav' 


const Layout = ({children}: any) => {
  return (
    <div className='hero'>
        <Nav/>
        {children}
    </div>
  )
}

export default Layout