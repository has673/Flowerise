import Image from "next/image";
import React from "react";

const Box3 = ({img,head1,head2,p1,p2,p3}) => {
  return (
    <div
      className="flex"
    >
      
      <div >
        <div>
          <h1 className="font-bold text-7xl font-Nunito text-heading">{head1}</h1>
          <h1 className="font-bold text-7xl  text-heading">{head2}</h1>
        
        </div>
        <div className="my-5">
          <p className="text-xl text-text"> {p1}</p>
          <p className="text-xl text-text"> {p2}</p>
          <p className="text-xl text-text"> {p3}</p>
          
          
        </div>
      </div>
      <div className="mx-10">
        <Image src={img} width={583} height={443} />
      </div>
    </div>
  );
};

export default Box3;
