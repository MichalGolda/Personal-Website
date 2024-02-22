import Image from "next/image";

export type ServiceCardProps = {
  title: string;
  content: string;
  iconSrc: string;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  content,
  iconSrc,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-4" {...props}>
      <div className="flex flex-row gap-x-4 md:flex-col md:gap-y-2 lg:flex-row md:items-start lg:items-center items-center">
        <Image
          src={iconSrc}
          alt={title}
          width={64}
          height={64}
          className="w-[48px] lg:w-[64px]"
        />
        <h4 className="font-bold text-lg md:text-xl lg:text-2xl text-secondary">
          {title}
        </h4>
      </div>
      <p className="text-body text-sm md:text-base">{content}</p>
      <span className="block bg-primary w-32 h-0.5"></span>
    </div>
  );
};

export default ServiceCard;
