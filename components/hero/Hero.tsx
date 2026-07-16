import Background from "../background/Background";
import Button from "../ui/Button";
import AnimatedTitle from "./AnimatedTitle";
import Badge from "../ui/Badge";
import SocialLinks from "../ui/SocialLinks";
import ScrollIndicator from "../ui/ScrollIndicator";

export default function Hero() {
  return (
    <section
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        px-6
        py-24
        md:px-10
        md:py-0
      "
    >
      <Background />

      <div
        className="
          relative
          z-10
          mx-auto
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          text-center
        "
      >
        <Badge>
          Creative Technical Artist
        </Badge>

        <div className="mt-6 md:mt-8">
          <AnimatedTitle />
        </div>

        <p
          className="
            mt-6
            max-w-2xl
            px-2
            text-base
            leading-8
            text-gray-300
            md:mt-8
            md:px-0
            md:text-lg
          "
        >
          Building tools, crafting visuals and empowering artists through
          Blender development, motion design and real-time production
          workflows.
        </p>

        <div
          className="
            mt-10
            flex
            w-full
            max-w-sm
            flex-col
            gap-4
            sm:max-w-none
            sm:flex-row
            sm:justify-center
          "
        >
          <Button>
            Explore Portfolio
          </Button>

          <button
            className="
              rounded-full
              border
              border-white/10
              px-8
              py-3
              text-white
              transition
              hover:border-blue-500/50
              hover:bg-white/5
            "
          >
            Download CV
          </button>
        </div>

        <div className="mt-12">
          <SocialLinks />
        </div>

        <div className="mt-12 md:mt-20">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}