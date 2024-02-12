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
}) => {
  return (
    <div className="flex flex-col gap-y-4">
      <div className="flex flex-row gap-x-4 items-center">
        <Image src={iconSrc} alt={title} width={64} height={64} />
        <h4 className="font-bold text-2xl">{title}</h4>
      </div>
      <p className="text-body">{content}</p>
      <span className="block bg-primary w-32 h-0.5"></span>
    </div>
  );
};

export default ServiceCard;
