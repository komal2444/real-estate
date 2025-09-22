import React, { useEffect, useState } from 'react';
import { assets } from '../assets/assets';

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  useEffect(()=>{
    
    if(showMobileMenu){
        document.body.style.overflow ='hidden'
    }else{
        document.body.style.overflow ='auto'
    }
    return()=>{
        document.body.style.overflow ='auto'
    }

  },[showMobileMenu])

  return (
    <div className='absolute top-0 left-0 w-full z-10'>
      <div className='container mx-auto flex justify-between items-center py-4 px-6 md:px-20 lg:px-32 bg-transparent'>
        <img src={assets.logo} alt="Logo" />
        
        <ul className='hidden md:flex gap-7 text-white'>
          <a href="#Header" className='cursor-pointer hover:text-gray-400'>Home</a>
          <a href="#About" className='cursor-pointer hover:text-gray-400'>About</a>
          <a href="#Project" className='cursor-pointer hover:text-gray-400'>Project</a>
          <a href="#Testimonials" className='cursor-pointer hover:text-gray-400'>Testimonials</a>
        </ul>

        <button className='hidden md:block bg-white px-8 py-2 rounded-full'>Sign up</button>

        <img 
          src={assets.menu_icon} 
          className='md:hidden w-7 cursor-pointer' 
          alt="Menu" 
          onClick={() => setShowMobileMenu(true)} 
        />
      </div>

      {/* ------- Mobile Menu ------- */}
      <div className={`md:hidden fixed top-0 right-0 bottom-0 w-full bg-white transition-all duration-300 ${showMobileMenu ? 'h-full' : 'h-0 overflow-hidden'}`}>
        <div className='flex justify-end p-5'>
          <img 
            src={assets.cross_icon} 
            className='w-6 cursor-pointer' 
            alt="Close" 
            onClick={() => setShowMobileMenu(false)} 
          />
        </div>

        <ul className='flex flex-col items-center gap-4 text-lg font-medium'>
          <a href="#Header" className='px-4 py-2 rounded-full inline-block'>Home</a>
          <a href="#About" className='px-4 py-2 rounded-full inline-block'>About</a>
          <a href="#Project" className='px-4 py-2 rounded-full inline-block'>Project</a>
          <a href="#testimonials" className='px-4 py-2 rounded-full inline-block'>Testimonials</a>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
