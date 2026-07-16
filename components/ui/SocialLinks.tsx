import { socials } from "@/data/socials";

export default function SocialLinks() {
  return (
    <div className="mt-12 flex gap-8 text-sm text-gray-500">
      {socials.map((social) => (
        <a
          key={social.name}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="transition hover:text-white"
        >
          {social.name}
        </a>
      ))}
    </div>
  );
}