import Image from "next/image";

export default function ContactDetails() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col sm:grid sm:grid-rows-2 sm:gap-x-4 sm:grid-cols-2 lg:sticky lg:top-20 lg:h-fit lg:flex lg:flex-col gap-y-16 gap-x-8">
        <div className="flex flex-row gap-x-4 items-center underline">
          <Image
            src="/github-square.svg"
            alt="github"
            width={64}
            height={64}
            className="w-[48px] lg:w-[64px]"
          />
          <a
            className="text-secondary font-medium  md:text-xl lg:text-2xl"
            href="https://github.com/michalgolda"
          >
            github.com/michalgolda
          </a>
        </div>
        <div className="flex flex-row gap-x-4 items-center underline">
          <Image
            src="/linkedin-square.svg"
            alt="linkedin"
            width={64}
            height={64}
            className="w-[48px] lg:w-[64px]"
          />
          <a
            className="text-secondary font-medium  md:text-xl lg:text-2xl"
            href="https://linkedin.com/michalgolda"
          >
            linkedin.com/michalgolda
          </a>
        </div>
        <div className="flex flex-row gap-x-4 items-center underline">
          <Image
            src="/email-square.svg"
            alt="email"
            width={64}
            height={64}
            className="w-[48px] lg:w-[64px]"
          />
          <a
            className="text-secondary font-medium  md:text-xl lg:text-2xl"
            href="mailto:kontakt@michalgolda.com"
          >
            kontakt@michalgolda.com
          </a>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Image
            src="/phone-square.svg"
            alt="phone"
            width={64}
            height={64}
            className="w-[48px] lg:w-[64px]"
          />
          <span className="text-secondary font-medium  md:text-xl lg:text-2xl">
            +48 695 611 553
          </span>
        </div>
      </div>
    </div>
  );
}
