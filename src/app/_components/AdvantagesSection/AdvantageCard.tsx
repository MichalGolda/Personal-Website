export type AdvantageCardProps = {
  title: string;
  content: string;
  icon: React.ReactElement;
};

const AdvantageCard: React.FC<AdvantageCardProps> = ({
  title,
  content,
  icon,
  ...props
}) => {
  return (
    <div className="flex flex-col gap-y-4 text-left justify-left" {...props}>
      {icon}
      <h4 className="font-bold text-lg md:text-xl lg:text-2xl text-secondary">
        {title}
      </h4>
      <p className="text-sm md:text-base text-body">{content}</p>
    </div>
  );
};

export default AdvantageCard;
