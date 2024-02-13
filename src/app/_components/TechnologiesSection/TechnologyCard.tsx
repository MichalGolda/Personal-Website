export type TechnologyCardProps = {
  title: string;
  content: string;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, content }) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <h4 className="text-lg md:text-xl lg:text-2xl text-secondary font-bold">
        {title}
      </h4>
      <p className="text-sm md:text-base text-body">{content}</p>
    </div>
  );
};

export default TechnologyCard;
