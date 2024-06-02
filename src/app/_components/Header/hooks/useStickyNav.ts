import { useEffect } from "react";
import { useNavContext } from "@/app/_hooks/useNavContext";

export const useStickyNav = () => {
  const { sticky, setSticky, hamburgerIsShown, showHamburger } =
    useNavContext();

  const isSticky = () => window.scrollY > 128;

  useEffect(() => {
    window.addEventListener("scroll", () => setSticky(isSticky()));
  }, []);

  useEffect(() => {
    setSticky(isSticky());
  }, []);

  return {
    sticky,
    hamburgerIsShown,
    showHamburger,
  };
};
