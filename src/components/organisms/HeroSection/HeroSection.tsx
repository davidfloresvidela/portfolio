"use client";

import { motion } from "framer-motion";
import { ArrowDown, FolderGit2, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Button } from "@/components/atoms/Button";
import { Icon } from "@/components/atoms/Icon";
import { Text } from "@/components/atoms/Text";
import { usePointerGlow } from "@/hooks/usePointerGlow";
import { fadeInUp, staggerContainer } from "@/lib/motion";
import { about } from "@/data/about";

export function HeroSection() {
  const t = useTranslations("hero");
  const glowRef = usePointerGlow<HTMLDivElement>();

  return (
    <section
      id="hero"
      ref={glowRef}
      className="relative flex min-h-screen items-center overflow-hidden"
      style={
        {
          background:
            "radial-gradient(600px circle at var(--glow-x, 50%) var(--glow-y, 30%), color-mix(in oklab, var(--accent) 12%, transparent), transparent 70%)",
        } as React.CSSProperties
      }
    >
      <div
        aria-hidden
        className="bg-accent/20 animate-float pointer-events-none absolute top-24 right-[12%] hidden size-40 rounded-full blur-3xl md:block"
      />
      <div
        aria-hidden
        className="bg-accent-2/20 animate-float pointer-events-none absolute right-[28%] bottom-24 hidden size-32 rounded-full blur-3xl [animation-delay:-3s] md:block"
      />

      <div className="mx-auto w-full max-w-6xl px-4 py-32 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
          className="max-w-3xl"
        >
          {about.available && (
            <motion.div variants={fadeInUp} className="mb-6">
              <span className="border-accent/30 bg-accent/5 text-accent inline-flex items-center gap-2 rounded-full border px-4 py-1.5 font-mono text-xs">
                <span className="relative flex size-2">
                  <span className="bg-accent absolute inline-flex size-full animate-ping rounded-full opacity-60" />
                  <span className="bg-accent relative inline-flex size-2 rounded-full" />
                </span>
                {t("available")}
              </span>
            </motion.div>
          )}

          <motion.div variants={fadeInUp}>
            <Text
              variant="eyebrow"
              tone="accent"
              className="flex items-center gap-2"
            >
              <Icon icon={Sparkles} size={14} />
              {about.role}
            </Text>
          </motion.div>

          <motion.h1
            variants={fadeInUp}
            className="font-display mt-4 text-[clamp(2.75rem,9vw,5rem)] leading-[1.02] font-bold tracking-tight"
          >
            <span className="text-primary">{t("greeting")} </span>
            <span className="text-gradient">{about.name}</span>
          </motion.h1>

          <motion.div variants={fadeInUp}>
            <Text
              as="p"
              variant="body"
              tone="secondary"
              className="mt-6 max-w-xl text-lg"
            >
              {about.tagline}
            </Text>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="mt-10 flex flex-col gap-3 sm:flex-row"
          >
            <Button href="#projects" size="lg">
              <Icon icon={FolderGit2} size={18} />
              {t("viewProjects")}
            </Button>
            <Button href="#contact" variant="secondary" size="lg">
              {t("contact")}
            </Button>
          </motion.div>
        </motion.div>
      </div>

      <a
        href="#about"
        aria-label={t("scrollDown")}
        className="text-muted hover:text-accent absolute bottom-8 left-1/2 hidden -translate-x-1/2 transition-colors md:block"
      >
        <motion.span
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          className="block"
        >
          <Icon icon={ArrowDown} size={22} />
        </motion.span>
      </a>
    </section>
  );
}
