
import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <header>
      <div className="flex flex-row mt-7 mb-10 justify-between items-center">
        <div className="ml-10 ">
          <Image src="/logo.png" width={142} height={32} alt="logo" priority />
        </div>
        <p className="mb--4">©2023 Flowrise</p>
        <div>
          <ul className="flex flex-row justify-between mx-6">
            <li className="mx-6">Features</li>
            <li  className="mx-6">About</li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Footer;
