import Image from "next/image";
import React from "react";

const Review = ({text,name,title,image}) => {
  return (
    <div className="bg-pink-300 w-96 h-70 rounded-xl mx-5">
      <div>
        <p className="text-xl ml-3">
          {text}
        </p>
      </div>
      <div className="flex flex-row my-3 ">
      <Image className="rounded-3xl" src={image} width={56} height={66}   />
      <div className="my-3" >
      <p className="text-xs ml-3">{name}</p>
      <p className="text-xs  ml-3">{title}</p>
      </div>
      </div>
    </div>
  );
};

export default Review;
