import Button from "@/components/Button";
import Heading from "@/components/Heading";
import Review from "@/components/Review";
import { testimonials } from "../../testimonial";
import Image from "next/image";
import Heading2 from "@/components/Heading2";
import Box from "@/components/Box";
import Box2 from "@/components/Box2";
import { icons } from "../../icon";
import Icon from "@/components/Icon";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <Heading content={"Productivty that flows with your life."} />
      <div className="text-text1 text-center text-2xl mt-6">
        <p>Unleash your potential by harmonizing your daily tasks and habits</p>
        <p>with your unique energy rhythms.</p>
      </div>
      <div className="flex justify-center mt-6">
        <Button />
      </div>
      <div className="flex justify-center">
        <Image src="/image 10.png" width={936} height={650} />
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
      <div className="flex justify-center mt-24">
        <Box2
        img={'/6.png'}
        head1={"Mindful task"}
        head2={"tracking"}
        p1={"Blend productivity with"}
        p2={"mindfullness. Unterstand your"}
        p3={"patterns, enhance focus."} />
      </div>
      <div className="flex justify-center mt-24">
        <Box
          img={"/7.png"}
          head1={"Productivity and"}
          head2={"self care"}
          p1={"Beyond task completion "}
          p2={"Embrace self-care routines"}
          p3={"fotser a healthier liefstyle"}
        />
      </div>
      <div className="flex justify-center mt-24">
      <Card/>
      </div>
    </>
  );
}
