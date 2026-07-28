import { Text } from "@/components/atoms/Text";
import { SocialLink } from "@/components/molecules/SocialLink";
import { about } from "@/data/about";
import { contact } from "@/data/contact";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-subtle border-t">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-4 py-10 sm:px-6 md:flex-row lg:px-8">
        <div className="text-center md:text-left">
          <Text as="p" variant="h3" className="font-display">
            <span className="text-accent">{about.name}</span>
          </Text>
          <Text as="p" variant="small" tone="muted" className="mt-1">
            © {year} · Diseñado y desarrollado con Next.js
          </Text>
        </div>

        <ul className="flex gap-3">
          {contact.socials.map((social) => (
            <li key={social.label}>
              <SocialLink social={social} />
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}
