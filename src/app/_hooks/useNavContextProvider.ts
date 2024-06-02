import { useState } from "react";

export const useNavContextProvider = () => {
  const [sticky, setSticky] = useState<boolean>(false);
  const [hamburgerIsShown, showHamburger] = useState<boolean>(false);

  return {
    sticky,
    setSticky,
    showHamburger,
    hamburgerIsShown,
  };
};
