import Container from "../ui/Container";
import Section from "../ui/Section";
import Heading from "../ui/Heading";
import Button from "../ui/Button";

export default function Contact() {
  return (
    <Section id="contact">

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

           <a
  href="mailto:lubinsebastien@gmail.com?subject=Portfolio%20Contact"
  className="
    inline-flex
    items-center
    justify-center
    rounded-full
    bg-blue-600
    px-8
    py-3
    font-medium
    text-white
    transition
    hover:bg-blue-500
  "
>
  Contact Me
</a>

<a
  href="/cv/Sebastien_Lubin_CV.pdf"
  target="_blank"
  rel="noopener noreferrer"
  className="
    inline-flex
    items-center
    justify-center
    rounded-full
    border
    border-blue-500/40
    bg-transparent
    px-8
    py-3
    font-medium
    text-blue-500
    transition-all
    duration-300
    hover:bg-blue-500
    hover:text-white
    hover:border-blue-500
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