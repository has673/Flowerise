import React from "react";
import Box from "@/components/Box";
import { testimonials } from "../../../testimonial";
import Review from "@/components/Review";
import { icons } from "../../../icon";
import Icon from "@/components/Icon";
import Heading2 from "@/components/Heading2";
import Card from "@/components/Card";
import Box3 from "@/components/Box3";

const page = () => {
  return (
    <>
      <div className="flex justify-center mt-24">
        <Box3
          img={"/15.png"}
          head1={"Features for"}
           head2={"finding focus"}
          p1={
            "Harness our innovative feature set to propel"
          }
          p2={"your productivity power. Make every"}
          p3={"moment count, stress less.Try for free"}
        />
      </div>
      <div className="mt-11">
        <Heading2 content={"Robust Features"} />
      </div>
      <div className="flex flex-wrap justify-center space-x-16 my-12 ">
        {icons.map((icon, index) => (
          <Icon
            key={index}
            text={icon.text}
            p1={icon.p1}
            p2={icon.p2}
            p3={icon.p3}
            image={icon.image}
          />
        ))}
      </div>
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

      <div className="flex justify-center mt-24">
        <Card />
      </div>
    </>
  );
};

export default page;
