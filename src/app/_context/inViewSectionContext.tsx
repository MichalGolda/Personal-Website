"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export const InViewSectionContext = createContext({
  section: "",
  setSection: (id: string) => {},
});

export const useInViewSectionContext = () => useContext(InViewSectionContext);

export const useInViewSection = (id: string) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const { setSection } = useInViewSectionContext();

  useEffect(() => {
    inView && setSection(id);
  }, [inView]);

  return { ref };
};

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
