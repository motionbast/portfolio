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
        pt-24
        pb-20
        md:px-10
      "
    >
      <Background />

      <div
        className="
          relative
          z-10
          mx-auto
          mt-10
          flex
          w-full
          max-w-6xl
          flex-col
          items-center
          text-center
        "
      >
        {/* Name */}

        <AnimatedTitle />

        {/* Subtitle */}

        <Badge>
          Technical Artist • Blender Developer
        </Badge>

        {/* Description */}

        <p
          className="
            mt-2
            max-w-3xl
            px-2
            text-base
            leading-8
            text-gray-300
            md:px-0
            md:text-lg
          "
        >
          Building production tools, crafting cinematic visuals and developing
          real-time workflows for artists, studios and creative pipelines.
        </p>

        {/* Buttons */}

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

          <a
            href="/cv/Sebastien_Lubin_CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
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
          </a>
        </div>

        {/* Social Links */}

        <div className="mt-12">
          <SocialLinks />
        </div>

        {/* Scroll */}

        <div className="mt-20">
          <ScrollIndicator />
        </div>
      </div>
    </section>
  );
}