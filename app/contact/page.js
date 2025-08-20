import ContactForm from '@/components/ContactForm';

export const metadata = { title: 'Contact — Your Name' };

export default function ContactPage() {
  return (
    <div className="space-y-4 max-w-2xl">
      <h1 className="section-title">Contact</h1>
      <p className="section-subtitle">Have a question or want to work together? Send a message.</p>
      <ContactForm />
    </div>
  );
}
