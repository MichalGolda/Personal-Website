import Alert from "./Alert";
import type { AlertProps } from "./Alert";

export default function ErrorAlert({ message }: AlertProps) {
  return <Alert className="bg-error" message={message} />;
}
