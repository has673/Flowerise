import Image from 'next/image'
import React from 'react'


const Icon = ({image,text,p1,p2,p3}) => {
  return (
    <div >
    <div>
    <Image src={image} width={'80'} height={'80'} />
    </div>
    <div>
     <h2>{text}</h2>
    </div>
    <p>{p1}</p>
    <p>{p2}</p>
    <p>{p3}</p>
      
    </div>
  )
}

export default Icon
