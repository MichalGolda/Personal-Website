"use client";

import { SectionHeading, Container } from "@/app/_components";
import ContactForm from "./ContactForm";
import ContactDetails from "./ContactDetails";
import { useInViewSection } from "@/app/_hooks/useInViewSection";

export default function ContactSection() {
  const { ref } = useInViewSection("#contact");

  return (
    <section ref={ref} id="contact" className="my-64">
      <Container>
        <SectionHeading
          headline="kontakt"
          title="Skonktaktuj się ze mną"
          body="Możesz mnie znaleźć w paru miejscach w sieci lub skorzystać z formularza i napisać wiadomość."
        />
        <div className="flex flex-col gap-16 lg:flex-row w-full mt-32">
          <ContactDetails />
          <ContactForm />
        </div>
      </Container>
    </section>
  );
}
