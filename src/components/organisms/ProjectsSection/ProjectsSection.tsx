import { Reveal } from "@/components/atoms/Reveal";
import { ProjectCard } from "@/components/molecules/ProjectCard";
import { SectionHeading } from "@/components/molecules/SectionHeading";
import { projects } from "@/data/projects";

export function ProjectsSection() {
  return (
    <section
      id="projects"
      className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8"
    >
      <Reveal>
        <SectionHeading
          eyebrow="Proyectos"
          title="Trabajo seleccionado"
          description="Una muestra de productos que he diseñado y desarrollado."
        />
      </Reveal>

      <div className="mt-12 grid gap-5 md:grid-cols-2">
        {projects.map((project, index) => (
          <Reveal as="div" key={project.title} delay={index * 0.06}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </section>
  );
}
