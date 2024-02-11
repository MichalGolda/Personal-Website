import { PrimaryButton } from "./Button";

export default function YourProjectCard() {
  return (
    <div className="w-full h-full bg-secondary flex items-center justify-center">
      <div className="flex flex-col gap-y-4 items-center">
        <h4 className="text-white font-bold text-2xl">
          Miejsce na twój projekt
        </h4>
        <PrimaryButton className="w-fit">Skontaktuj się</PrimaryButton>
      </div>
    </div>
  );
}
