import { SecondaryButton } from "@/app/_components";

export default function Banner() {
  return (
    <div className="bg-primary w-full py-16 px-8 flex flex-col gap-y-8 text-center items-center">
      <h2 className="text-4xl font-bold text-white max-w-3xl">
        Masz pomysł na projekt? Skontaktuj się ze mną i stwórzmy razem coś
        wyjątkowego
      </h2>
      <div className="flex flex-col gap-y-1">
        <h4 className="text-2xl text-white font-semibold">
          <span className="text-[#B6C2FF80] font-bold text-5xl px-2">”</span>
          Początek jest najważniejszą częścią pracy
        </h4>
        <span className="text-white text-base text-secondary font-medium">
          Platon
        </span>
      </div>
      <a href="#contact">
        <SecondaryButton className="w-fit" type="button">
          Skontaktuj się
        </SecondaryButton>
      </a>
    </div>
  );
}
