
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <header>
      <div className="flex flex-row mt-7 mb-10 justify-between items-center">
        <div className="ml-10 ">
        <Link href={"/"}>
          <Image src="/Logo.png" width={142} height={32} alt="logo" priority />
          </Link>
        </div>
        <p className="mb--4">©2023 Flowrise</p>
        <div>
          <ul className="flex flex-row justify-between mx-6">
            <Link href={"features"} className="mx-6">Features</Link>
            <Link href={"About"}  className="mx-6">About</Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Footer;
