"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle2, Download, Mail } from "lucide-react";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Text } from "@/components/atoms/Text";
import { FormField } from "@/components/molecules/FormField";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SocialLink } from "@/components/molecules/SocialLink";
import { contact } from "@/data/contact";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function ContactForm() {
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = "Escribe tu nombre.";
    if (!EMAIL_PATTERN.test(email))
      nextErrors.email = "Introduce un correo válido.";
    if (message.length < 10)
      nextErrors.message = "El mensaje debe tener al menos 10 caracteres.";

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      event.currentTarget.reset();
    }
  };

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Contacto"
          title="Construyamos algo juntos"
          description="¿Tienes un proyecto en mente? Escríbeme y respondo en menos de 24 horas."
        />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          {submitted ? (
            <div
              role="status"
              className="border-accent/30 bg-accent/5 flex h-full flex-col items-start justify-center gap-3 rounded-2xl border p-8"
            >
              <Icon icon={CheckCircle2} size={32} className="text-accent" />
              <Text as="p" variant="h3">
                ¡Mensaje enviado!
              </Text>
              <Text as="p" variant="body" tone="secondary">
                Gracias por escribir. Te responderé muy pronto.
              </Text>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <FormField
                id="name"
                name="name"
                label="Nombre"
                autoComplete="name"
                placeholder="Tu nombre"
                error={errors.name}
              />
              <FormField
                id="email"
                name="email"
                label="Correo"
                type="email"
                autoComplete="email"
                placeholder="tucorreo@email.com"
                error={errors.email}
              />
              <FormField
                id="message"
                name="message"
                label="Mensaje"
                type="textarea"
                placeholder="Cuéntame sobre tu proyecto…"
                error={errors.message}
              />

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                <Icon icon={Mail} size={18} />
                Enviar mensaje
              </Button>
            </form>
          )}
        </Reveal>

        <Reveal className="flex flex-col gap-8" delay={0.1}>
          <div className="border-subtle bg-surface rounded-2xl border p-6">
            <Text variant="eyebrow" tone="secondary">
              Correo directo
            </Text>
            <a
              href={`mailto:${contact.email}`}
              className="font-display text-primary hover:text-accent mt-2 block text-lg break-all transition-colors"
            >
              {contact.email}
            </a>
            <Text as="p" variant="small" tone="muted" className="mt-1">
              {contact.phone}
            </Text>
          </div>

          <div>
            <Text variant="eyebrow" tone="secondary" className="mb-3 block">
              Redes
            </Text>
            <ul className="flex flex-wrap gap-3">
              {contact.socials.map((social) => (
                <li key={social.label}>
                  <SocialLink social={social} showLabel />
                </li>
              ))}
            </ul>
          </div>

          <Button href={contact.cvUrl} variant="ghost" download>
            <Icon icon={Download} size={18} />
            Descargar CV
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
