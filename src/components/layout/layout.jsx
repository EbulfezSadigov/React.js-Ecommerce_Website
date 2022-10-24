import React from 'react'
import Routers from '../../routers/routers'
import Footer from '../footer/footer'
import Header from '../header/header'

const Layout = () => {
  return (
    <>
        <Header/>
        <div>
            <Routers/>
        </div>
        <Footer/>
    </>
  )
}

export default Layout