import MenuItem from "./MenuItem";

const MENU_ITEMS = [
  {
    name: "Start",
    href: "#top",
  },
  {
    name: "O mnie",
    href: "#about-me",
  },
  {
    name: "Usługi",
    href: "#services",
  },
  {
    name: "Portfolio",
    href: "#portfolio",
  },
  {
    name: "Kontakt",
    href: "#contact",
  },
];

export type MapMenuItemsProps = {
  section: string;
  onClick: () => void;
};

export const MapMenuItems = ({ section, onClick }: MapMenuItemsProps) => {
  return MENU_ITEMS.map(({ name, href }) => {
    return (
      <MenuItem
        key={name}
        name={name}
        href={href}
        onClick={onClick}
        current={href === section}
      />
    );
  });
};
