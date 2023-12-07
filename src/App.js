import React from 'react';
import {Navbar, Showcase, About, Mentor, Login, Footer} from './components'

const App = () => {
  return (
    <div className='font-unbounded bg-white text-black'>
      <Navbar/>
      <Showcase/>
      <About/>
      <Login />
      <Footer/>
    </div>
  )
}

export default App