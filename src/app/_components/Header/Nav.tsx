"use client";

import Image from "next/image";
import MenuItem from "./MenuItem";

export default function Nav() {
  const menuItems = [
    ["Start", "#top"],
    ["O mnie", "#about-me"],
    ["Uslugi", "#services"],
    ["Portfolio", "#portfolio"],
    ["Kontakt", "#contact"],
  ];

  return (
    <nav className="flex flex-row justify-between pt-8 items-center">
      <Image src="/logo.svg" alt="logo" width={151} height={29} />
      <div className="flex flex-col gap-y-2 cursor-pointer lg:hidden">
        <div className="block w-8 bg-secondary h-0.5"></div>
        <div className="block w-8 bg-secondary h-0.5"></div>
      </div>
      <ul className="lg:flex lg:flex-row lg:gap-x-8 lg:list-none hidden">
        {menuItems.map((menuItem) => {
          return <MenuItem name={menuItem[0]} href={menuItem[1]} />;
        })}
      </ul>
    </nav>
  );
}
