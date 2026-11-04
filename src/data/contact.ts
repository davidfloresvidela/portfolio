import type { Contact } from "@/types";
import { withBasePath } from "@/lib/site";

export const contact: Contact = {
  email: "david.flores.videla@gmail.com",
  socials: [
    { label: "GitHub", url: "https://github.com/davidfloresvidela" },
    { label: "LinkedIn", url: "https://www.linkedin.com/in/dfloresvidela" },
  ],
  // Rendered through a plain <a> (see Button), which — unlike next/link —
  // doesn't get the basePath applied automatically.
  // Recruiter-facing filename best practice: First_Last_CV — the actual
  // asset paths stay stable, generic names regardless.
  cv: {
    es: {
      url: withBasePath("/cv-david-flores.pdf"),
      downloadName: "David_Flores_CV.pdf",
    },
    en: {
      url: withBasePath("/cv-david-flores-en.pdf"),
      downloadName: "David_Flores_Resume.pdf",
    },
  },
};
