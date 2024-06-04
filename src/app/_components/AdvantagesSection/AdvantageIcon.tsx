import Image from "next/image";

export type AdvantageIconProps = {
  src: string;
  alt: string;
};

const AdvantageIcon = ({ src, alt }: AdvantageIconProps) => (
  <Image
    src={src}
    alt={alt}
    width={64}
    height={64}
    className="w-[48px] lg:w-[64px]"
  />
);

export default AdvantageIcon;
