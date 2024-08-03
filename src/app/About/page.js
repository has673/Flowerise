import React from 'react'
import Box from '@/components/Box'
import { testimonials } from '../../../testimonial'
import Review from '@/components/Review'


const page = () => {
  return (
    <>
   

      <div className="flex flex-wrap justify-center ">
        {testimonials.map((testimonial, index) => (
          <Review
            key={index}
            text={testimonial.text}
            name={testimonial.name}
            title={testimonial.title}
            image={testimonial.image}
          />
        ))}
      </div>
  </>

  )
}

export default page
