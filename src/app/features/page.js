import React from 'react'
import Box from '@/components/Box'
import { testimonials } from '../../../testimonial'
import Review from '@/components/Review'


const page = () => {
  return (
    <>
    <div className="flex justify-center">
    <Box
      img={"/image 20.png"}
      head1={"Harmonize your"}
      head2={"schedule"}
      p1={"Align tasks with your natural"}
      p2={"energy rhythms. Embrace"}
      p3={"tailored productivity"}
    />
  </div>
  <div className=" text-center mt-16 mb-8">
        <p className="font-semibold text-xl ">What other Say</p>
      </div>

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
