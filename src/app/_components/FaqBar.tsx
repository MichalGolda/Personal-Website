import Image from "next/image";

export type FaqBarProps = {
  title: string;
  content: string;
  showContent?: boolean;
};

export const FaqBar: React.FC<FaqBarProps> = ({
  title,
  content,
  showContent = false,
}) => {
  return (
    <div>
      <div className="w-full h-auto py-4 px-8 bg-lightGrey flex flex-row justify-between items-center">
        <h4 className="text-2xl font-bold text-secondary">{title}</h4>
        <Image src="/plus.svg" alt="plus" width={24} height={24} />
      </div>
      {showContent && <p>{content}</p>}
    </div>
  );
};
