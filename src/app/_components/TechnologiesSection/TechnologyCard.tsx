export type TechnologyCardProps = {
  title: string;
  content: string;
};

const TechnologyCard: React.FC<TechnologyCardProps> = ({ title, content }) => {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <h4 className="text-2xl text-secondary font-bold">{title}</h4>
      <p className="text-body">{content}</p>
    </div>
  );
};

export default TechnologyCard;
