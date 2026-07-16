export default function ScrollIndicator() {
  return (
    <div className="mt-24 flex flex-col items-center gap-3">

      <span className="text-xs uppercase tracking-[0.35em] text-gray-500">
        Scroll
      </span>

      <div className="flex h-10 w-6 justify-center rounded-full border border-white/20">

        <div className="mt-2 h-2 w-2 animate-bounce rounded-full bg-white/70" />

      </div>

    </div>
  );
}