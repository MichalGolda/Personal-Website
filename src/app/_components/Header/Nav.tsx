"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import MenuItem from "./MenuItem";
import { Container } from "@/app/_components";
import { useInViewSectionContext } from "@/app/_context/inViewSectionContext";

const useStickyNav = () => {
  const [sticky, setSticky] = useState<boolean>(false);

  const isSticky = () => window.scrollY > 128;

  useEffect(() => {
    window.addEventListener("scroll", () => setSticky(isSticky()));
  }, []);

  useEffect(() => {
    setSticky(isSticky);
  }, []);

  return {
    sticky,
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
  const { sticky } = useStickyNav();
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
        <div className="flex flex-col gap-y-2 cursor-pointer lg:hidden">
          <div className="block w-8 bg-secondary h-0.5"></div>
          <div className="block w-8 bg-secondary h-0.5"></div>
        </div>
        <ul className="lg:flex lg:flex-row lg:gap-x-8 lg:list-none hidden">
          {menuItems.map(({ name, href }) => {
            return (
              <MenuItem
                key={name}
                name={name}
                href={href}
                current={href === section}
              />
            );
          })}
        </ul>
      </Container>
    </nav>
  );
}
