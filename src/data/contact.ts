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
  // Recruiter-facing filename best practice: First_Last_CV — the actual
  // asset path above stays a stable, generic name regardless.
  cvDownloadName: "David_Flores_CV.pdf",
};
