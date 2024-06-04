import Image from "next/image";

export type FooterIconProps = {
  src: string;
  alt: string;
  href: string;
};

const SocialIcon = ({ src, alt, href }: FooterIconProps) => {
  return (
    <a href={href}>
      <Image src={src} width={24} height={24} alt={alt} />
    </a>
  );
};

export const GithubSocialIcon = () => (
  <SocialIcon
    src="/github.webp"
    alt="github"
    href="https://github.com/michalgolda"
  />
);

export const LinkedInSocialIcon = () => (
  <SocialIcon
    src="/linkedin.webp"
    alt="linkedin"
    href="https://linkedin.com/michalgolda"
  />
);

export default SocialIcon;
