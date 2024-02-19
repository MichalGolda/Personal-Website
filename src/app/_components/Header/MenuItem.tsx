import { useState } from "react";

export type MenuItemProps = {
  href: string;
  name: string;
  current: boolean;
  onClick: () => void;
};

export default function MenuItem({
  href,
  name,
  current,
  onClick,
}: MenuItemProps) {
  const [hover, setHover] = useState<boolean>(false);

  return (
    <li onClick={onClick}>
      <a
        className="text-5xl font-medium hover:text-secondary duration-500 transition-[color] lg:text-base decoration-none"
        href={href}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {name}
        <span
          className={`w-0 bg-transparent transition-all duration-500 h-0.5  block ${
            hover || current ? "!bg-primary !w-2/3" : ""
          }`}
        ></span>
      </a>
    </li>
  );
}
