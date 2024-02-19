"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";

export type InViewSectionContextType = {
  section: string | null;
  setSection: (id: string | null) => void;
};

export const InViewSectionContext = createContext<InViewSectionContextType>({
  section: null,
  setSection: () => {},
});

export const useInViewSectionContext = () => useContext(InViewSectionContext);

const useInViewSectionContextProvider = () => {
  const [section, setSection] = useState<string | null>(null);

  return {
    section,
    setSection,
  };
};

export const useInViewSection = (id: string) => {
  const { ref, inView } = useInView({
    threshold: 0.25,
  });
  const { setSection } = useInViewSectionContext();

  useEffect(() => {
    console.log(id, inView);

    inView && setSection(id);
  }, [inView]);

  return {
    ref,
  };
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
