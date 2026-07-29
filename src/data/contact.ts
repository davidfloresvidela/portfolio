import type { Contact } from "@/types";
import { withBasePath } from "@/lib/site";

export const contact: Contact = {
  email: "david.flores22@inacapmail.cl",
  socials: [
    { label: "GitHub", url: "https://github.com/davidfloresvidela" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/dfloresvidela" },
  ],
  // Rendered through a plain <a> (see Button), which — unlike next/link —
  // doesn't get the basePath applied automatically.
  cvUrl: withBasePath("/cv-david-flores.pdf"),
};
