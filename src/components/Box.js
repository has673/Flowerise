import Image from "next/image";
import React from "react";

const Box = () => {
  return (
    <div className="flex flex-row justify-evenly space-x-16 mt-20">
      <div>
        <Image src="/image 20.png" width={300} height={200} />
      </div>
      <div>
        <h1 className="font-bold text-5xl">Harmonize your</h1>
        <h1 className="font-bold text-5xl">schedule</h1>
      </div>
    </div>
  );
};

export default Box;
