export type HamburgerProps = {
  isShown: boolean;
  onClick: () => void;
};

export function Hamburger({ isShown, onClick }: HamburgerProps) {
  return (
    <div
      onClick={onClick}
      className="flex flex-col gap-y-2 cursor-pointer lg:hidden"
    >
      <div
        className={`${
          isShown && "rotate-45 translate-y-[4px] translate-x-[-4px]"
        } block w-8 bg-secondary h-0.5 transition-transform duration-500`}
      ></div>
      <div
        className={`${
          isShown && "-rotate-45 translate-y-[-5px] translate-x-[-4px]"
        } block w-8 bg-secondary h-0.5 transition-transform duration-500`}
      ></div>
    </div>
  );
}
