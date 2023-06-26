"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <header className="flex py-3 h-24 font-medium text-md overflow-hidden">
      <nav className="hidden lg:flex  bg-white w-full justify-between border-b border-b-gray-200 items-center px-5 y-2">
        <div className="flex items-center gap-5">
          <div>
            <Link passHref href="/">
              <Image
                src="/logo.png"
                alt="Ableton logo"
                width={50}
                height={20}
                className="object-contain"
              />
            </Link>
          </div>
          <div className="space-x-4 flex items-center justify-between">
            <Link href="/live">Live</Link>
            <Link href="/push">Push</Link>
            <Link href="/note">Note</Link>
            <Link href="/shop">Shop</Link>
            <Link href="/packs">Packs</Link>
            <Link href="/help">Help</Link>
            <h4 className="flex items-center  text-[#ff764d]">
              More <span className=" text-2xl px-1">+</span>
            </h4>
          </div>
        </div>

        <div className="space-x-4">
          <Link className="text-[#0000ff]" href="/free">
            Try Live for free
          </Link>
          <Link href="/free">Log in or register</Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
