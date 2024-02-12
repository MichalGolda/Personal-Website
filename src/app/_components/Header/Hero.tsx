import { PrimaryButton, SecondaryOutlinedButton } from "@/app/_components";

export default function Hero() {
  return (
    <div className="flex items-center justify-center h-[calc(100%-32px)] w-full -mt-8">
      <div className="text-center items-center flex flex-col">
        <h1 className="text-secondary font-bold text-6xl">
          Buduje spersonalizowane <br />
          <span className="text-primary">strony internetowe</span>,{" "}
          <span className="text-primary">aplikacje webowe</span>
        </h1>
        <p className="text-2xl text-body font-normal max-w-3xl mt-8">
          Koduję świat pełen możliwości - tworząc rozwiązania, wpisuję swoją
          pasję w cyfrową rzeczywistość.
        </p>
        <div className="space-x-8 mt-10">
          <a href="#contact">
            <PrimaryButton className="w-64">Stwórzmy coś razem</PrimaryButton>
          </a>
          <a href="#portfolio">
            <SecondaryOutlinedButton className="w-64">
              Portfolio
            </SecondaryOutlinedButton>
          </a>
        </div>
      </div>
    </div>
  );
}
