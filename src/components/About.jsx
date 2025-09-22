
import React from 'react'
import { assets } from '../assets/assets'
import {motion} from 'framer-motion'
const About = () => {
  return (
    <motion.div
      className='flex flex-col items-center justify-center w-full px-6 md:px-20 lg:px-32 overflow-hidden'
      id='about'
    >
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center'>
        About <span className='underline underline-offset-4 decoration-1 font-light'>Our Branch</span>
      </h1>
      
      <p className='text-center mb-10'>
        Passionate About Properties, Dedicated to Your Vision
      </p>

      <div className='flex flex-col md:flex-row items-center md:items-start md:gap-20'>
        <img src={assets.brand_img} alt="Our Branch" className='w-full sm:w-1/2 max-w-lg' />

        <div className='flex flex-col items-center md:items-start mt-10 text-gray-600'>
          <div className='grid grid-cols-2 gap-6 md:gap-10 w-full 2xl:pr-28'>

            <div>
              <p className='text-4xl font-medium text-gray-800'>10+</p>
              <p>Years of Excellence</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>12+</p>
              <p>Project Completed</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>20+</p>
              <p>Mn. Sq Ft. Delivered</p>
            </div>

            <div>
              <p className='text-4xl font-medium text-gray-800'>25+</p>
              <p>Ongoing Project</p>
            </div>
          </div>

          <p className='my-10 max-w-lg'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis ipsa maiores unde ullam odit delectus? 
            Deleniti, sit quia commodi ea aperiam beatae error cumque repellat veniam nostrum nulla ex fugit.
          </p>

          <button className='bg-blue-600 text-white px-8 py-2 rounded'>
            Learn More
          </button>
        </div>
      </div>
    </motion.div>
  )
}

export default About

