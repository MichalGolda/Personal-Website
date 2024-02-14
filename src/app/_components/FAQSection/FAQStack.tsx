"use client";

import { FAQ } from "@/app/_types/faq";
import { useState } from "react";
import FAQBar from "./FAQBar";

export type FAQStackProps = {
  data: FAQ[];
};

export default function FAQStack({ data }: FAQStackProps) {
  const [currentVisibleFAQAnswer, setCurrentVisibleFAQAnswer] = useState<
    string | null
  >();

  const handleClick = (question: string) => {
    if (currentVisibleFAQAnswer) {
      if (currentVisibleFAQAnswer === question) {
        setCurrentVisibleFAQAnswer(null);
      } else {
        setCurrentVisibleFAQAnswer(question);
      }
    } else {
      setCurrentVisibleFAQAnswer(question);
    }
  };

  return (
    <div className="flex flex-col gap-y-8 mt-16">
      {data.map(({ question, answer }) => (
        <FAQBar
          key={question}
          question={question}
          answer={answer}
          showContent={currentVisibleFAQAnswer === question}
          onClick={() => handleClick(question)}
        />
      ))}
    </div>
  );
}
