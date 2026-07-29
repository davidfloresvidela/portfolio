import type { ReactNode } from "react";

export interface MainTemplateProps {
  // Header/Footer are Server Components (they call next-intl's server-only
  // getTranslations) and this template is a Client Component, so a Server
  // Component parent must instantiate them and pass them down — a "use
  // client" file can't import and render a server-only component directly.
  header: ReactNode;
  footer: ReactNode;
  children: ReactNode;
}
