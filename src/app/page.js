import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Review from "@/components/Review";
import { testimonials } from "../../testimonial";
import Image from "next/image"
import Heading2 from "@/components/Heading2";
import Box from "@/components/Box";

export default function Home() {
  return (
    <>
      <Heading content={"Productivty that flows with your life."} />
      <div className="text-475569 text-center text-2xl mt-6">
        <p>
          Unleash your potential by harmonizing your daily tasks and habits
        </p>
        <p>with your unique energy rhythms.</p>

      </div>
      <div className="flex justify-center mt-6">
      <Button />
    </div>
    <div className="flex justify-center">
    <Image src='/image 10.png' width={936} height={650}/>
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
    <div className="mt-11">
    <Heading2  content={"Robust Features"} />
    </div>
    <Box/>
    </>
  );
}
