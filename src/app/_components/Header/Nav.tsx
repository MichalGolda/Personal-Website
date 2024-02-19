"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { Container } from "@/app/_components";
import { useInViewSectionContext } from "@/app/_context/inViewSectionContext";
import { useNavContext } from "@/app/_context/navContext";

const useStickyNav = () => {
  const { sticky, setSticky, hamburger, setHambuger } = useNavContext();

  const isSticky = () => window.scrollY > 128;

  useEffect(() => {
    window.addEventListener("scroll", () => setSticky(isSticky()));
  }, []);

  useEffect(() => {
    setSticky(isSticky());
  }, []);

  return {
    sticky,
    hamburger,
    setHambuger,
  };
};

export default function Nav() {
  const menuItems = [
    {
      name: "Start",
      href: "#top",
    },
    {
      name: "O mnie",
      href: "#about-me",
    },
    {
      name: "Usługi",
      href: "#services",
    },
    {
      name: "Portfolio",
      href: "#portfolio",
    },
    {
      name: "Kontakt",
      href: "#contact",
    },
  ];
  const { sticky, hamburger, setHambuger } = useStickyNav();
  const { section } = useInViewSectionContext();

  return (
    <nav
      className={`transition-all duration-500 border-b border-b-solid border-b-transparent bg-white ${
        sticky &&
        "!border-b-lightGrey z-[999] fixed left-0 top-0 w-full transition-all duration-500"
      }`}
    >
      <Container
        className={`flex flex-row justify-between transition-[padding-top] duration-500 py-8 items-center ${
          sticky ? "!py-4" : "!px-0"
        }`}
      >
        <a href="#top">
          <Image src="/logo.svg" alt="logo" width={151} height={29} />
        </a>
        <div
          onClick={() => setHambuger(!hamburger)}
          className="flex flex-col gap-y-2 cursor-pointer lg:hidden"
        >
          <div
            className={`${
              hamburger && "rotate-45 translate-y-[4px] translate-x-[-4px]"
            } block w-8 bg-secondary h-0.5 transition-transform duration-500`}
          ></div>
          <div
            className={`${
              hamburger && "-rotate-45 translate-y-[-4px] translate-x-[-4px]"
            } block w-8 bg-secondary h-0.5 transition-transform duration-500`}
          ></div>
        </div>
        <ul
          className={`w-full h-full bg-lightBlue flex transition-transform duration-500 left-0 flex-col items-center pt-16 gap-y-8 fixed ${
            sticky ? "top-[61px]" : "top-[93.8px]"
          } ${hamburger ? "translate-x-[0]" : "translate-x-[-200%]"} lg:hidden`}
        >
          {menuItems.map(({ name, href }) => {
            return (
              <MenuItem
                key={name}
                name={name}
                href={href}
                onClick={() => setHambuger(false)}
                current={href === section}
              />
            );
          })}
        </ul>
        <ul className={`hidden lg:flex lg:flex-row lg:gap-x-8`}>
          {menuItems.map(({ name, href }) => {
            return (
              <MenuItem
                key={name}
                name={name}
                href={href}
                onClick={() => setHambuger(false)}
                current={href === section}
              />
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
