import Image from "next/image";
import { MouseEventHandler } from "react";

export type FAQBarProps = {
  title: string;
  content: string;
  showContent?: boolean;
  onClick: MouseEventHandler<HTMLImageElement>;
};

const FAQBar: React.FC<FAQBarProps> = ({
  title,
  content,
  showContent = false,
  onClick,
}) => {
  return (
    <div>
      <div className="w-full h-auto py-4 px-8 gap-x-2 bg-lightGrey flex flex-row justify-between items-center">
        <h4 className="text-lg md:text-xl lg:text-2xl font-bold text-secondary">
          {title}
        </h4>
        {!showContent ? (
          <Image
            className="hover:cursor-pointer w-[16px] md:w-[24px]"
            onClick={onClick}
            src="/plus.svg"
            alt="plus"
            width={24}
            height={24}
          />
        ) : (
          <Image
            className="hover:cursor-pointer w-[16px] md:w-[24px]"
            onClick={onClick}
            src="/minus.svg"
            alt="minus"
            width={24}
            height={24}
          />
        )}
      </div>
      {showContent && <p className="text-body mt-4">{content}</p>}
    </div>
  );
};

export default FAQBar;
