import { useFormStatus } from "react-dom";
import { PrimaryButton } from "@/app/_components";

export default function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <PrimaryButton className="w-fit" type="submit" disabled={pending}>
      {pending ? "Wysyłanie..." : "Wyślij"}
    </PrimaryButton>
  );
}
