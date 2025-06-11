"use client";
import Image from "next/image";
import logoImage from "@/assets/images/logo.svg";
import Button from "@/components/Button";
import { useState } from "react";

import HamBurgerIcon from "@/assets/icons/hamburger";
import { NAV_LINKS } from "@/utils/constants";
import NavBarMobile from "./NavBarMobile";



export default function Navbar() {
  const [isOpened, setIsOpened] = useState(false);
  return (
    <>
      <header className="py-4 lg:py-8 fixed w-full top-0 z-50">
        <div className="container max-w-5xl">
          <div className="border border-white/15 rounded-[27px] md:rounded-full bg-neutral-950/50 backdrop-blur ">
            <div className="grid grid-cols-2  p-2 px-4 items-center md:pr-2 lg:grid-cols-3 ">
              <div>
                <Image
                  src={logoImage}
                  alt=""
                  className="h-9 w-auto md:h-auto"
                />
              </div>
              {/* For screen larger than mobile */}
              <div className="lg:flex justify-center items-center hidden">
                <nav className="flex gap-6 font-medium">
                  {NAV_LINKS.map((link) => (
                    <a href={link.href} key={link.label}>
                      {link.label}
                    </a>
                  ))}
                </nav>
              </div>
              <div className="flex justify-end gap-4">
                <HamBurgerIcon isOpened={isOpened} setIsOpened={setIsOpened} />
                <Button
                  variant="secondary"
                  className="hidden md:inline-flex items-center"
                >
                  Log In
                </Button>
                <Button
                  variant="primary"
                  className="hidden md:inline-flex items-center"
                >
                  Sign Up
                </Button>
              </div>
            </div>
            <NavBarMobile isOpened={isOpened} />
          </div>
        </div>
      </header>
      <div className="pb-[86px] md:pb-[98px] lg:pb-[130px]"></div>
    </>
  );
}
