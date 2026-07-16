type ButtonProps = {
  children: React.ReactNode;
};

export default function Button({ children }: ButtonProps) {
  return (
    <button
      className="
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
      "
    >
      {children}
    </button>
  );
}