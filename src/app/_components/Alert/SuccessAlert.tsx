import Alert from "./Alert";
import type { AlertProps } from "./Alert";

export default function SuccessAlert({ message }: AlertProps) {
  return <Alert className="bg-success" message={message} />;
}
