"use client";

import { AlertCircle, CheckCircle2, Download, Mail } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Text } from "@/components/atoms/Text";
import { FormField } from "@/components/molecules/FormField";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SocialLink } from "@/components/molecules/SocialLink";
import { useContactForm } from "@/hooks/useContactForm";
import { contact } from "@/data/contact";

export function ContactForm() {
  const t = useTranslations("contact");
  const { errors, status, handleSubmit } = useContactForm();

  return (
    <section
      id="contact"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_1fr]">
        <Reveal>
          {status === "success" ? (
            <div
              role="status"
              className="border-accent/30 bg-accent/5 flex h-full flex-col items-start justify-center gap-3 rounded-2xl border p-8"
            >
              <Icon icon={CheckCircle2} size={32} className="text-accent" />
              <Text as="p" variant="h3">
                {t("form.successTitle")}
              </Text>
              <Text as="p" variant="body" tone="secondary">
                {t("form.successBody")}
              </Text>
            </div>
          ) : (
            <form noValidate onSubmit={handleSubmit} className="space-y-5">
              <FormField
                id="name"
                name="name"
                label={t("form.nameLabel")}
                autoComplete="name"
                placeholder={t("form.namePlaceholder")}
                error={errors.name}
              />
              <FormField
                id="email"
                name="email"
                label={t("form.emailLabel")}
                type="email"
                autoComplete="email"
                placeholder={t("form.emailPlaceholder")}
                error={errors.email}
              />
              <FormField
                id="message"
                name="message"
                label={t("form.messageLabel")}
                type="textarea"
                placeholder={t("form.messagePlaceholder")}
                error={errors.message}
              />

              {status === "error" && (
                <p
                  role="alert"
                  className="text-danger flex items-center gap-2 font-mono text-sm"
                >
                  <Icon icon={AlertCircle} size={16} />
                  {t("form.errorBanner")}
                </p>
              )}

              <Button
                type="submit"
                size="lg"
                className="w-full sm:w-auto"
                disabled={status === "submitting"}
              >
                <Icon icon={Mail} size={18} />
                {status === "submitting"
                  ? t("form.submitting")
                  : t("form.submit")}
              </Button>
            </form>
          )}
        </Reveal>

        <Reveal className="flex flex-col gap-8" delay={0.1}>
          <div className="border-subtle bg-surface rounded-2xl border p-6">
            <Text variant="eyebrow" tone="secondary">
              {t("directEmail")}
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
              {t("socials")}
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
            {t("downloadCv")}
          </Button>
        </Reveal>
      </div>
    </section>
  );
}
