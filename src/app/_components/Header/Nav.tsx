import Image from "next/image";

export default function Nav() {
  return (
    <nav className="flex flex-row justify-between pt-8 items-center">
      <Image src="/logo.svg" alt="logo" width={151} height={29} />
      <div className="flex flex-col gap-y-2 cursor-pointer lg:hidden">
        <div className="block w-8 bg-secondary h-0.5"></div>
        <div className="block w-8 bg-secondary h-0.5"></div>
      </div>
      <ul className="lg:flex lg:flex-row lg:gap-x-8 lg:list-none hidden">
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-secondary decoration-none"
            href="#top"
          >
            Start
            <span className="w-2/3 bg-primary h-0.5 block"></span>
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
            href="#about-me"
          >
            O mnie
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
            href="#services"
          >
            Usługi
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
            href="#portfolio"
          >
            Portfolio
          </a>
        </li>
        <li>
          <a
            className="font-medium hover:text-secondary duration-500 transition-all text-body decoration-none"
            href="#contact"
          >
            Kontakt
          </a>
        </li>
      </ul>
    </nav>
  );
}
