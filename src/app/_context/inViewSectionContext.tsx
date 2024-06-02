"use client";

import { createContext, useState } from "react";

export const InViewSectionContext = createContext({
  section: "",
  setSection: (id: string) => {},
});

const useInViewSectionContextProvider = () => {
  const [section, setSection] = useState<string>("");
  return { section, setSection };
};

export default function InViewSectionContextProvider({
  children,
}: React.PropsWithChildren) {
  const provider = useInViewSectionContextProvider();

  return (
    <InViewSectionContext.Provider value={provider}>
      {children}
    </InViewSectionContext.Provider>
  );
}
