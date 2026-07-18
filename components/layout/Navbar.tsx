import Image from "next/image";
import Container from "../ui/Container";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-black/30 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between">

        <a href="#" className="flex items-center">
          <Image
            src="/logo.svg"
            alt="B-Rainy Studio"
            width={150}
            height={50}
            priority
            className="h-10 w-auto"
          />
        </a>

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