"use client";

import { createContext, useContext, useState } from "react";

export const NavContext = createContext({
  sticky: false,
  setSticky: (sticky: boolean) => {},
  hamburger: false,
  setHambuger: (hamburger: boolean) => {},
});

export const useNavContext = () => useContext(NavContext);

const useNavContextProvider = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [hamburger, setHambuger] = useState<boolean>(false);

  return {
    sticky,
    setSticky,
    hamburger,
    setHambuger,
  };
};

export function NavContextProvider({ children }: React.PropsWithChildren) {
  const provider = useNavContextProvider();

  return <NavContext.Provider value={provider}>{children}</NavContext.Provider>;
}
