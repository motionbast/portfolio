export default function Background() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">

      {/* Video */}

      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="
          absolute
          inset-0
          h-full
          w-full
          object-cover
          object-center
        "
      >
        <source
          src="/videos/showreel.mp4"
          type="video/mp4"
        />
      </video>

      {/* Dark Overlay */}

      <div className="absolute inset-0 bg-black/75" />

      {/* Blue Glow */}

      <div className="absolute left-1/2 top-1/2 h-[700px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/15 blur-3xl" />

      {/* Purple Glow */}

      <div className="absolute right-0 top-0 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-3xl" />

      {/* Grid */}

      <div
        className="
          absolute
          inset-0
          opacity-15
          [background-image:linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
          [background-size:70px_70px]
        "
      />

    </div>
  );
}