import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <Section>

      <Container>

        <Heading
          subtitle="Contact"
          title="Let's Build Something Amazing"
        />

        <div className="mx-auto max-w-3xl text-center">

          <p className="text-lg leading-8 text-gray-400">

            Whether you're looking for a Creative Technical Artist,
            Motion Designer or Blender Tool Developer,
            I'd love to discuss your next project.

          </p>

          <div className="mt-12 flex flex-wrap justify-center gap-4">

            <Button>
              Contact Me
            </Button>

            <a
              href="/cv.pdf"
              target="_blank"
              className="
                rounded-full
                border
                border-white/10
                px-8
                py-3
                text-white
                transition
                hover:border-blue-500/40
                hover:bg-white/5
              "
            >
              Download CV
            </a>

          </div>

        </div>

      </Container>

    </Section>
  );
}