type HeadingProps = {
  title: string;
  subtitle?: string;
};

export default function Heading({
  title,
  subtitle,
}: HeadingProps) {
  return (
    <div className="mb-16 text-center">

      {subtitle && (
        <p className="mb-3 uppercase tracking-[0.35em] text-blue-400">
          {subtitle}
        </p>
      )}

      <h2 className="text-4xl font-bold text-white md:text-5xl">
        {title}
      </h2>

    </div>
  );
}