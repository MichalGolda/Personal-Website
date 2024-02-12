import { SectionHeading } from "@/app/_components";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";

export default function ContactSection() {
  return (
    <section id="contact" className="my-64 max-w-[1320px] mx-auto">
      <SectionHeading
        headline="kontakt"
        title="Skonktaktuj się ze mną"
        body="Możesz mnie znaleźć w paru miejscach w sieci lub skorzystać z formularza i napisać wiadomość."
      />
      <div className="flex flex-row w-full mt-32">
        <ContactDetails />
        <ContactForm />
      </div>
    </section>
  );
}
