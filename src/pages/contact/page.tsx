import ContactInfo from "./info";
import ContactForm from "./form";

export default function ContactPage() {
  return (
    <main className="flex flex-col gap-24">
      <ContactInfo/>
      <ContactForm />
    </main>
  );
}