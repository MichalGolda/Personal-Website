"use client";

import { Container, Logo } from "@/app/_components";
import { useInViewSectionContext } from "@/app/_hooks/useInViewSectionContext";
import { MapMenuItems } from "./MapMenuItems";
import { useStickyNav } from "./hooks/useStickyNav";
import { Hamburger } from "./Hamburger";

export default function Nav() {
  const { section } = useInViewSectionContext();
  const { sticky, hamburgerIsShown, showHamburger } = useStickyNav();

  return (
    <nav
      className={`transition-all duration-500 border-b border-b-solid border-b-transparent bg-white ${
        sticky &&
        "!border-b-lightGrey z-[999] fixed left-0 top-0 w-full transition-all duration-500"
      }`}
    >
      <Container
        className={`flex flex-row justify-between transition-[padding-top] duration-500 py-4 md:py-8 items-center ${
          sticky ? "!py-4" : "!px-0"
        }`}
      >
        <Logo />
        <Hamburger
          onClick={() => showHamburger(!hamburgerIsShown)}
          isShown={hamburgerIsShown}
        />
        <ul
          className={`w-full h-dvh bg-lightBlue flex transition-transform duration-500 left-0 flex-col items-center pt-16 gap-y-8 fixed ${
            sticky ? "top-[61.8px]" : "top-[61.8px] md:top-[93.8px]"
          } ${
            hamburgerIsShown ? "translate-x-[0]" : "translate-x-[-200%]"
          } lg:hidden`}
        >
          <MapMenuItems
            section={section}
            onClick={() => showHamburger(false)}
          />
        </ul>
        <ul className={`hidden lg:flex lg:flex-row lg:gap-x-8`}>
          <MapMenuItems
            section={section}
            onClick={() => showHamburger(false)}
          />
        </ul>
      </Container>
    </nav>
  );
}
