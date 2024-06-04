import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useInViewSectionContext } from "../_hooks/useInViewSectionContext";

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
