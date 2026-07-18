type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <div className="flex justify-center mt-8 mb-8">
      <span
        className="
          inline-flex
          items-center
          rounded-full
          border
          border-blue-500/25
          bg-gradient-to-r
          from-blue-500/10
          to-cyan-500/10
          px-6
          py-2.5
          text-[11px]
          font-semibold
          uppercase
          tracking-[0.35em]
          text-blue-300
          backdrop-blur-md
          transition-all
          duration-300
          hover:border-blue-400/40
          hover:bg-blue-500/15
          hover:text-white
        "
      >
        {children}
      </span>
    </div>
  );
}