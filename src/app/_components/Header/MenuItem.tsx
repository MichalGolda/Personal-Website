import { useState } from "react";

export type MenuItemProps = {
  href: string;
  name: string;
};

export default function MenuItem({ href, name }: MenuItemProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <li>
      <a
        className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {name}
        <span
          className={`w-0 bg-transparent transition-all duration-500 h-0.5  block ${
            hover ? "!bg-primary !w-2/3" : ""
          }`}
        ></span>
      </a>
    </li>
  );
}
