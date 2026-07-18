import { projects } from "@/data/projects";
import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import ProjectCard from "./ProjectCard";

export default function FeaturedProjects() {
  return (
    <Section id="projects">

      <Container>

        <Heading
          subtitle="Featured Work"
          title="Selected Projects"
        />

        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              project={project}
            />
          ))}

        </div>

      </Container>

    </Section>
  );
}