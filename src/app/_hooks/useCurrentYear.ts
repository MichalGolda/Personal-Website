"use client";

import { useEffect, useState } from "react";

export const useCurrentYear = () => {
  const [currentYear, setCurrentYear] = useState<number>();  
  
  useEffect(() => {
    const date = new Date();
    const year = date.getFullYear();
    setCurrentYear(year);
  }, []);

  return currentYear;
};
  