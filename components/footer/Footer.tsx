import Container from "../ui/Container";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10 py-10">

      <Container>

        <div className="flex flex-col items-center justify-between gap-6 text-center text-sm text-gray-500 md:flex-row">

          <p>
            © {year} Sébastien Lubin
          </p>

          <div className="flex gap-6">

            <a
              href="https://motionbast.artstation.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              ArtStation
            </a>

            <a
              href="https://github.com/motionbast"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/slubin-techartist/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-white"
            >
              LinkedIn
            </a>

          </div>

        </div>

      </Container>

    </footer>
  );
}