import Image from "next/image";
import React from "react";

const Box2 = ({img,head1,head2,p1,p2,p3}) => {
  return (
    <div
      className="flex flex-row justify-centre space-x-20
     mt-20"
    >
      
      <div className="my-60">
        <div>
          <h1 className="font-bold text-5xl text-heading">{head1}</h1>
          <h1 className="font-bold text-5xl  text-heading">{head2}</h1>
        </div>
        <div className="my-5">
          <p className="text-xl text-text"> {p1}</p>
          <p className="text-xl  text-text">  {p2}</p>
          <p className="text-xl  text-text"> {p3}</p>
        </div>
      </div>
      <div>
        <Image src={img} width={580} height={584} />
      </div>
    </div>
  );
};

export default Box2;
