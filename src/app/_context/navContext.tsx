"use client";

import { createContext } from "react";
import { useNavContextProvider } from "../_hooks/useNavContextProvider";

export const NavContext = createContext({
  sticky: false,
  setSticky: (sticky: boolean) => {},
  hamburgerIsShown: false,
  showHamburger: (hamburgerIsShown: boolean) => {},
});

export function NavContextProvider({ children }: React.PropsWithChildren) {
  const provider = useNavContextProvider();

  return <NavContext.Provider value={provider}>{children}</NavContext.Provider>;
}
