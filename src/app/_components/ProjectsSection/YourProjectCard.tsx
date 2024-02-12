import { PrimaryButton } from "@/app/_components";

export default function YourProjectCard() {
  return (
    <div className="w-full h-full bg-secondary flex items-center justify-center">
      <div className="flex flex-col gap-y-4 items-center">
        <h4 className="text-white font-bold text-2xl">
          Miejsce na twój projekt
        </h4>
        <a href="#contact">
          <PrimaryButton className="w-fit">Skontaktuj się</PrimaryButton>
        </a>
      </div>
    </div>
  );
}
