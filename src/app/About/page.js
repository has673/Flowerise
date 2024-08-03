import React from "react";
import Box4 from "@/components/Box4";
import { testimonials } from "../../../testimonial";
import Review from "@/components/Review";
import Card from "@/components/Card";

const page = () => {
  return (
    <>
      <div className="flex justify-center my-36">
        <Box4
          img={"/8.png"}
          head1={"About the"}
          head2={"Flowrise"}
          head3={"team"}
          p1={" We’ve been seeking our own inner focus for"}
          p2={"over 8 years. We’re a passionate team trying"}
          p3={"to make the world a better place."}
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
      <div className="flex justify-center mt-24">
        <Card />
      </div>
    </>
  );
};

export default page;
