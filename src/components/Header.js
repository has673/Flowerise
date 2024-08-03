import Image from "next/image";
import Link from "next/link";
import React from "react";

const Header = () => {
  return (
    <header>
      <div className="flex flex-row my-7 justify-between items-center">
        <div className="ml-10 ">
          <Image src="/logo.png" width={142} height={32} alt="logo" priority />
        </div>
        <div>
          <ul className="flex flex-row justify-between mx-6">
            <Link href={'features'} className="mx-6">Features</Link>
            <Link href={'About'}  className="mx-6">About</Link>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
