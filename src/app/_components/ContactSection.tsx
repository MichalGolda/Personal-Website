import { SectionHeading } from "./SectionHeading";
import { Form } from "./Form";
import ContactDetails from "./ContactDetails";

export default function ContactSection() {
  return (
    <section className="my-64">
      <SectionHeading
        headline="kontakt"
        title="Skonktaktuj się ze mną"
        body="Możesz mnie znaleźć w paru miejscach w sieci lub skorzystać z formularza i napisać wiadomość."
      />
      <div className="flex flex-row w-full mt-32">
        <ContactDetails />
        <Form />
      </div>
    </section>
  );
}
