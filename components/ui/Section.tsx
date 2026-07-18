type SectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

export default function Section({
  children,
  className = "",
  id,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`
        scroll-mt-24
        py-24
        md:py-32
        ${className}
      `}
    >
      {children}
    </section>
  );
}