import { PrimaryButton } from "@/app/_components";

export default function YourProjectCard() {
  return (
    <div
      className="w-full h-full bg-secondary flex items-center justify-center"
      data-aos="zoom-in"
      data-aos-duration="500"
    >
      <div className="flex flex-col gap-y-4 items-center">
        <h4 className="text-white text-lg md:text-xl lg:text-2xl font-bold">
          Miejsce na twój projekt
        </h4>
        <a href="#contact">
          <PrimaryButton className="w-fit">Skontaktuj się</PrimaryButton>
        </a>
      </div>
    </div>
  );
}
