import React from 'react';
import { assets, testimonialsData } from '../assets/assets';

const Testimonials = () => {
  return (

    <motion.div 
    initial={{opacity:0,y:100}}
        transition={{duration:1.5}}
        whileInView={{opacity:1, y:0}}
        viewport={{once:true}}
    className='container mx-auto py-10 lg:px-32 w-full overflow-hidden' id='testimonials'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-4 text-center'>
        Customer <span className='underline underline-offset-4 decoration-1 font-light'>Testimonials</span>
      </h1>
      <p className='text-center text-gray-500 mb-12 max-w-xl mx-auto'>
        Hear what our satisfied clients have to say about their experience with us.
      </p>
      <div>
      
        {testimonialsData.map((testimonial,index)=>(
            <div kye={index} className='max-w-[340] border shadow-lg rounded px-8 py-12 text-center'>
                <img className='w-20 h-20 rounded-full mx-auto mb-4' src={testimonial.image} alt={testimonial.alt} />
                <h2 className='text-xl text-gray-700 font-medium'>{testimonial.name}</h2>

                <p className='text-gray-500 mb-4 text'>{testimonial.title}</p>

                <div className='flex justify-center gap-1 text-red-500 mb-4'>
                  {Array.from({length:testimonial.rating},(item,index)=>(
                    <img key ={index} src={assets.star_icon} alt=""/>
                  ))}
                </div>
            </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Testimonials;

