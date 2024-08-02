import Button from "@/components/button";
import Heading from "@/components/Heading";

import Image from "next/image"
export default function Home() {
  return (
    <>
      <Heading />
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
    <div className=" text-center mt-16">
    <p className="font-semibold text-xl ">What other Say</p>
    </div>
    </>
  );
}
