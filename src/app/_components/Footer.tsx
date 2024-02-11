import Image from "next/image";

export default function Footer() {
  return (
    <footer className="flex flex-row justify-between items-center py-8 max-w-[1320px] mx-auto">
      <Image src="/logo.svg" width={151} height={29} alt="logo" />
      <span className="text-body text-xs">
        © 2024 Wszelkie prawa zastrzeżone.{" "}
        <span className="font-medium">
          Zaprojektowane & Wdrożone przez Michał Gołda
        </span>
      </span>
      <div className="flex flex-row gap-x-4">
        <a href="#">
          <Image src="/github.svg" width={24} height={24} alt="github" />
        </a>
        <a href="#">
          <Image src="/linkedin.svg" width={24} height={24} alt="linkedin" />
        </a>
      </div>
    </footer>
  );
}
