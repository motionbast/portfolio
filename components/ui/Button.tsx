import Link from "next/link";

type ButtonProps = {
  children: React.ReactNode;
  href?: string;
  external?: boolean;
};

export default function Button({
  children,
  href,
  external = false,
}: ButtonProps) {
  const className = `
    inline-flex
    items-center
    justify-center
    rounded-full
    border
    border-white/10
    bg-white
    px-8
    py-3
    font-semibold
    text-black
    shadow-lg
    transition-all
    duration-300
    hover:scale-105
    hover:shadow-blue-500/30
    active:scale-95
  `;

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          className={className}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      );
    }

    return (
      <Link href={href} className={className}>
        {children}
      </Link>
    );
  }

  return <button className={className}>{children}</button>;
}