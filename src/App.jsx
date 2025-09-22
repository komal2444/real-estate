import React from 'react'
import Header from './components/Header'
import About from './components/About'
import Project from './components/Project'
import Testimonails from './components/Testimonails'
import Contact from './components/Contact'
  import { ToastContainer,} from 'react-toastify';
import Footer from './components/Footer'

const App = () => {
  return (
    <div className='w-full overflow-hidden'>
      <ToastContainer/>
      <Header/>  
      <About/>
      <Project/>
      <Testimonails/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
