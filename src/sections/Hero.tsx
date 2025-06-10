import Button from "@/components/Button";
import { useHeroAnimations } from "@/hooks/useHeroAnimation";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";
import customCursor from "@/assets/images/cursor-you.svg";
import { HERO_ANIMATION_CONFIG } from "@/constants/heroAnimations.";
import SectionHeading from "@/components/SectionHeadings";
import SubHeading from "@/components/SubHeadings";
import HighlightBadge from "@/components/HighlightBadge";
import AppImage from "@/components/AppImage";

export default function Hero() {
  const {
    leftDesignScope,
    rightDesignScope,
    andreaPointerScope,
    bryanPointerScope,
  } = useHeroAnimations();

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${customCursor.src}), auto` }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={HERO_ANIMATION_CONFIG.leftImage.initial}
          className={HERO_ANIMATION_CONFIG.leftImage.className}
          drag
        >
         <AppImage src={designExample1Image} alt="Design example 1" />
        </motion.div>
        <motion.div
        ref={rightDesignScope}
           initial={HERO_ANIMATION_CONFIG.rightImage.initial}
          className={HERO_ANIMATION_CONFIG.rightImage.className}
          drag
        >
          <AppImage src={designExample2Image} alt="Design example 2" />

        </motion.div>
        <motion.div
          ref={andreaPointerScope}
          initial={HERO_ANIMATION_CONFIG.andreaPointer.initial}
          className={HERO_ANIMATION_CONFIG.andreaPointer.className}
        >
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div
          ref={bryanPointerScope}
           initial={HERO_ANIMATION_CONFIG.bryanPointer.initial}
          className={HERO_ANIMATION_CONFIG.bryanPointer.className}
        >
          <Pointer name="Bryan" />
        </motion.div>
      <HighlightBadge />
        <SectionHeading />
        <SubHeading />
        <form
          action=""
          className="flex border border-white/15 rounded-full p-2 mt-8 max-w-lg mx-auto "
        >
          <input
            type="email"
            placeholder="Enter your email"
            className="bg-transparent px-4 md:flex-1 w-full"
          />
          <Button
            type="submit"
            variant="primary"
            className="whitespace-nowrap"
            size="sm"
          >
            Sign Up
          </Button>
        </form>
      </div>
    </section>
  );
}