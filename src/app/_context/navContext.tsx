"use client";

import { createContext, useContext, useState } from "react";

export const NavContext = createContext({
  sticky: false,
  setSticky: (sticky: boolean) => {},
});

export const useNavContext = () => useContext(NavContext);

const useNavContextProvider = () => {
  const [sticky, setSticky] = useState<boolean>(false);

  return {
    sticky,
    setSticky,
  };
};

export function NavContextProvider({ children }: React.PropsWithChildren) {
  const provider = useNavContextProvider();

  return <NavContext.Provider value={provider}>{children}</NavContext.Provider>;
}
