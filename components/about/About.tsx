import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";

export default function About() {
  return (
    <Section>

      <Container>

        <Heading
          subtitle="About Me"
          title="Bridging Art & Technology"
        />

        <div className="mx-auto max-w-4xl text-center">

          <p className="text-xl leading-9 text-gray-300">

            I'm a Creative Technical Artist with more than 15 years of
            experience in IT, software development and digital production.

          </p>

          <p className="mt-8 leading-8 text-gray-400">

            My work combines Blender, Python, Motion Design, VFX and
            real-time workflows to build tools that simplify production and
            help artists focus on creativity.

          </p>

          <p className="mt-8 leading-8 text-gray-400">

            Today, I design production pipelines, develop Blender add-ons,
            and create cinematic experiences that bridge engineering and
            digital art.

          </p>

        </div>

      </Container>

    </Section>
  );
}