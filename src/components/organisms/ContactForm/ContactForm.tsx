import { Download } from "lucide-react";
import { getTranslations } from "next-intl/server";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Reveal } from "@/components/atoms/Reveal";
import { Text } from "@/components/atoms/Text";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { SocialLink } from "@/components/molecules/SocialLink";
import { contact } from "@/data/contact";
import type { Locale } from "@/i18n/routing";

// The contact form is temporarily hidden — see useContactForm.ts, which
// still has it fully implemented and tested for when it comes back.
export async function ContactForm({ locale }: { locale: Locale }) {
  const t = await getTranslations({ locale, namespace: "contact" });

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

      <Reveal
        className="mx-auto mt-12 flex max-w-md flex-col gap-8"
        delay={0.1}
      >
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
    </section>
  );
}
