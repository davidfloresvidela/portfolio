"use client";

import { useState, type FormEvent } from "react";
import { useTranslations } from "next-intl";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

export type ContactFormStatus = "idle" | "submitting" | "success" | "error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Set in .env.local (see .env.example) once you have a Formspree endpoint
// (or swap for another no-backend form service — the fetch below is generic).
const FORM_ENDPOINT = process.env.NEXT_PUBLIC_FORM_ENDPOINT;

export function useContactForm() {
  const t = useTranslations("contact.form.errors");
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<ContactFormStatus>("idle");

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();

    const nextErrors: FormErrors = {};
    if (!name) nextErrors.name = t("name");
    if (!EMAIL_PATTERN.test(email)) nextErrors.email = t("email");
    if (message.length < 10) nextErrors.message = t("message");

    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    if (!FORM_ENDPOINT) {
      setStatus("error");
      return;
    }

    setStatus("submitting");
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        body: data,
        headers: { Accept: "application/json" },
      });
      if (!response.ok) throw new Error("Form submission failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return { errors, status, handleSubmit };
}
