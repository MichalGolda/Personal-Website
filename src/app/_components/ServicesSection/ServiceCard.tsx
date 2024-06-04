import Image from "next/image";

export type ServiceCardProps = {
  title: string;
  content: React.ReactNode;
  icon: React.ReactElement;
};

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  content,
  icon,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-4" {...props}>
      <div className="flex flex-row gap-x-4 md:flex-col md:gap-y-2 lg:flex-row md:items-start lg:items-center items-center">
        {icon}
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
