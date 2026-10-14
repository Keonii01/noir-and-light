import { useState } from "react";

const fieldClass =
  "w-full bg-surface-container px-space-md py-3 text-on-surface placeholder:text-outline font-body-md text-body-md outline-none focus:bg-surface-container-high transition-colors";

const inquiryTypes = [
  { value: "print-acquisition", label: "Print Acquisition (Limited Silver Gelatin)" },
  { value: "gallery-representation", label: "Gallery Representation & Museum Loan" },
  { value: "private-commission", label: "Private Architectural Commission" },
  { value: "monograph-press", label: "Monograph Press & Publishing" },
];

const emptyForm = { name: "", email: "", type: "print-acquisition", message: "" };

export default function Contact() {
  const [form, setForm] = useState(emptyForm);
  const [sent, setSent] = useState(false);

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Later: send `form` to a backend or form service here
    setSent(true);
    setTimeout(() => {
      setSent(false);
      setForm(emptyForm);
    }, 3000);
  }

  return (
    <section
      id="contact"
      className="scroll-mt-20 relative overflow-hidden w-full bg-surface-container-low px-margin lg:px-margin-desktop py-space-xl"
    >
      <div className="absolute bottom-0 right-1/3 w-96 h-96 rounded-full bg-primary/5 blur-[140px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <div className="text-center mb-space-lg">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest block mb-2">
            Direct Correspondence
          </span>
          <h2 className="font-headline-lg text-headline-lg-mobile md:text-headline-lg text-on-surface tracking-tight">
            Inquire &amp; Acquisitions
          </h2>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-lg mx-auto mt-2">
            For print acquisitions, private commissions, and gallery representation inquiries. All
            editions ship worldwide via art couriers.
          </p>
        </div>

        <form
          onSubmit={handleSubmit}
          className="w-full bg-surface-container-lowest p-space-lg md:p-space-xl shadow-2xl flex flex-col gap-space-md"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
            <div className="flex flex-col gap-1.5">
              <label htmlFor="name" className="font-label-caps text-label-caps uppercase text-secondary">
                Full Name / Institution
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                placeholder="Helena van de Berg"
                className={fieldClass}
              />
            </div>
            <div className="flex flex-col gap-1.5">
              <label htmlFor="email" className="font-label-caps text-label-caps uppercase text-secondary">
                Email Address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="helena@archetypes.ch"
                className={fieldClass}
              />
            </div>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="type" className="font-label-caps text-label-caps uppercase text-secondary">
              Inquiry Classification
            </label>
            <select
              id="type"
              name="type"
              value={form.type}
              onChange={handleChange}
              className={fieldClass}
            >
              {inquiryTypes.map((t) => (
                <option key={t.value} value={t.value} className="bg-surface-container text-on-surface">
                  {t.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-1.5">
            <label htmlFor="message" className="font-label-caps text-label-caps uppercase text-secondary">
              Message &amp; Plate Specifications
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              required
              value={form.message}
              onChange={handleChange}
              placeholder="Please indicate artwork title, intended dimensions, and delivery location..."
              className={`${fieldClass} resize-none`}
            />
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-space-md">
            <button
              type="submit"
              disabled={sent}
              className={`w-full sm:w-auto px-space-xl py-3.5 font-label-caps text-label-caps uppercase tracking-widest transition-all duration-300 shadow-lg text-center ${
                sent
                  ? "bg-tertiary-container text-on-tertiary"
                  : "bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary-container"
              }`}
            >
              {sent ? "Inquiry Sent" : "Send Inquiry"}
            </button>
            <span className="font-label-caps text-label-caps uppercase text-outline text-center sm:text-right">
              Discreet • Response within 24 Hours
            </span>
          </div>
        </form>

        <div className="mt-space-lg text-center flex flex-col items-center">
          <span className="font-label-caps text-label-caps uppercase text-primary tracking-widest mb-1">
            Private Viewings by Appointment
          </span>
          <p className="font-body-md text-body-md text-on-surface-variant">
            Zürich (Neumarkt Studio) • Paris (Galerie Obscura) • New York (Hudson Yards Atelier)
          </p>
        </div>
      </div>
    </section>
  );
}