import { useDataContext } from "@/hooks/use-data";
import ContactInfo from "./info";
import ContactForm from "./form";

export default function ContactPage() {
  const { data } = useDataContext();
  const contact = data?.data?.contact;

  if (!contact) return null;

  return (
    <main className="flex flex-col gap-24">
      <ContactInfo contact={contact} />
      <ContactForm />
    </main>
  );
}