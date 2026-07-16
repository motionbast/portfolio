type BadgeProps = {
  children: React.ReactNode;
};

export default function Badge({ children }: BadgeProps) {
  return (
    <div
      className="
        inline-flex
        items-center
        rounded-full
        border
        border-blue-500/20
        bg-blue-500/10
        px-4
        py-2
        text-xs
        uppercase
        tracking-[0.35em]
        text-blue-300
        backdrop-blur-md
      "
    >
      {children}
    </div>
  );
}