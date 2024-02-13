"use client";

import { useState } from "react";
import FAQBar from "./FAQBar";

export default function FAQStack() {
  const FAQData = [
    {
      title: "Jak długo trwa realizacja projektu?a",
      content: "asdf",
    },
    {
      title: "Jak długo trwa realizacja projektu?b",
      content: "asdf",
    },
    {
      title: "Jak długo trwa realizacja projektu?c",
      content: "asdf",
    },
  ];
  const [currentVisibleFAQAnswer, setCurrentVisibleFAQAnswer] = useState<
    string | null
  >();

  const handleClick = (title: string) => {
    if (currentVisibleFAQAnswer) {
      if (currentVisibleFAQAnswer === title) {
        setCurrentVisibleFAQAnswer(null);
      } else {
        setCurrentVisibleFAQAnswer(title);
      }
    } else {
      setCurrentVisibleFAQAnswer(title);
    }
  };

  return (
    <div className="flex flex-col gap-y-8 mt-16">
      {FAQData.map(({ title, content }) => (
        <FAQBar
          key={title}
          title={title}
          content={content}
          showContent={currentVisibleFAQAnswer === title}
          onClick={() => handleClick(title)}
        />
      ))}
    </div>
  );
}
