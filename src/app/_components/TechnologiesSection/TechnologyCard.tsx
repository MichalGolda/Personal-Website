export type TechnologyCardProps = {
  title: string;
  content: () => React.ReactElement;
  icons?: React.ReactElement;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({
  title,
  content,
  icons,
}) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <h4 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold">
        {title}
      </h4>
      <p className="text-sm md:text-base text-body">{content()}</p>
      {icons && <div className="flex flex-row flex-wrap gap-4">{icons}</div>}
    </div>
  );
};

export default TechnologyCard;
