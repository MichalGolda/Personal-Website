import Image from "next/image";

export default function ContactDetails() {
  return (
    <div className="w-full flex justify-center">
      <div className="flex flex-col gap-y-16">
        <div className="flex flex-row gap-x-4 items-center underline">
          <Image src="/github-square.svg" alt="github" width={64} height={64} />
          <a
            className="text-secondary font-medium text-2xl"
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
          />
          <a
            className="text-secondary font-medium text-2xl"
            href="https://linkedin.com/michalgolda"
          >
            linkedin.com/michalgolda
          </a>
        </div>
        <div className="flex flex-row gap-x-4 items-center underline">
          <Image src="/email-square.svg" alt="email" width={64} height={64} />
          <a
            className="text-secondary font-medium text-2xl"
            href="mailto:kontakt@michalgolda.com"
          >
            kontakt@michalgolda.com
          </a>
        </div>
        <div className="flex flex-row gap-x-4 items-center">
          <Image src="/phone-square.svg" alt="phone" width={64} height={64} />
          <span className="text-secondary font-medium text-2xl">
            +48 695 611 553
          </span>
        </div>
      </div>
    </div>
  );
}
