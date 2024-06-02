import Image from "next/image";

export const Logo = () => {
  return (
    <a href="#top">
      <Image src="/logo.svg" alt="logo" width={151} height={29} />
    </a>
  );
};
