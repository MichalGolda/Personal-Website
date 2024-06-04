import Image from "next/image";

export type ServiceIconProps = {
  src: string;
  alt: string;
};

const ServiceIcon = ({ src, alt }: ServiceIconProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={64}
      height={64}
      className="w-[48px] lg:w-[64px]"
    />
  );
};

export default ServiceIcon;
