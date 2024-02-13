import Image from "next/image";

export type AdvantageCardProps = {
  iconSrc: string;
  title: string;
  content: string;
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  content,
  iconSrc,
}) => {
  return (
    <div className="flex flex-col gap-y-4 text-left justify-left">
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
      <p className="text-sm md:text-base text-body">{content}</p>
    </div>
  );
};

export default AdvantageCard;
