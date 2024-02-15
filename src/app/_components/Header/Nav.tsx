"use client";

import Image from "next/image";
import MenuItem from "./MenuItem";

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

  return (
    <nav className="flex flex-row justify-between pt-8 items-center">
      <Image src="/logo.svg" alt="logo" width={151} height={29} />
      <div className="flex flex-col gap-y-2 cursor-pointer lg:hidden">
        <div className="block w-8 bg-secondary h-0.5"></div>
        <div className="block w-8 bg-secondary h-0.5"></div>
      </div>
      <ul className="lg:flex lg:flex-row lg:gap-x-8 lg:list-none hidden">
        {menuItems.map(({ name, href }) => {
          return <MenuItem name={name} href={href} />;
        })}
      </ul>
    </nav>
  );
}
