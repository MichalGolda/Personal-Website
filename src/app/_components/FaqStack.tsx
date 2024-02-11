import { FaqBar } from "./FaqBar";

export default function FaqStack() {
  return (
    <div className="flex flex-col gap-y-8 mt-16">
      <FaqBar title="Jak długo trwa realizacja projektu?" content="asdf" />
      <FaqBar title="Jak długo trwa realizacja projektu?" content="asdf" />
      <FaqBar title="Jak długo trwa realizacja projektu?" content="asdf" />
      <FaqBar title="Jak długo trwa realizacja projektu?" content="asdf" />
    </div>
  );
}
