"use client";

import Image from "next/image";
import { useState, useEffect } from "react";
import { PrimaryButton } from "@/app/_components";

export default function ScrollUpBtn() {
  const [show, setShow] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setShow(window.scrollY > 128));
  }, []);

  return (
    <a
      className={`fixed bottom-0 right-0 mb-8 mr-8 ${show ? "" : "hidden"}`}
      href="#top"
    >
      <PrimaryButton className="!px-2 !py-2">
        <Image src="/arrow-up.svg" alt="arrow up" width={32} height={32} />
      </PrimaryButton>
    </a>
  );
}
