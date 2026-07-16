import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
      <Container className="flex h-16 items-center justify-between">

        <h1 className="text-lg font-bold tracking-wide text-white">
          SL
        </h1>

        <nav className="hidden gap-8 md:flex">

          <a
            href="#projects"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Projects
          </a>

          <a
            href="#about"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            About
          </a>

          <a
            href="#contact"
            className="text-sm text-gray-300 transition hover:text-white"
          >
            Contact
          </a>

        </nav>

      </Container>
    </header>
  );
}