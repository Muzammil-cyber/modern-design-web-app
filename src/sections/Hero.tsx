"use client";
import Button from "@/components/Button";
import designExample1Image from "@/assets/images/design-example-1.png";
import designExample2Image from "@/assets/images/design-example-2.png";
import Image from "next/image";
import Pointer from "@/components/Pointer";
import { useAnimate, motion } from "framer-motion";
import { useEffect } from "react";
import customCursor from "@/assets/images/cursor-you.svg";

export default function Hero() {
  const [leftDesignScope, leftDesignAnimate] = useAnimate();
  const [rightDesignScope, rightDesignAnimate] = useAnimate();
  const [andreaPointerScope, andreaPointerAnimate] = useAnimate();
  const [bryanPointerScope, bryanPointerAnimate] = useAnimate();

  useEffect(() => {
    leftDesignAnimate([
      [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
      [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    rightDesignAnimate([
      [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
      [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
    ]);
    andreaPointerAnimate([
      [andreaPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
      [andreaPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
      [
        andreaPointerScope.current,
        { x: 0, y: [0, 16, 0] },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);

    bryanPointerAnimate([
      [
        bryanPointerScope.current,
        { opacity: 1 },
        { duration: 0.5, delay: 1.5 },
      ],
      [bryanPointerScope.current, { x: 0, y: 100 }, { duration: 0.5 }],
      [
        bryanPointerScope.current,
        { x: [0, 16, 0], y: 0 },
        { duration: 0.5, ease: "easeInOut" },
      ],
    ]);
  }, []);

  return (
    <section
      className="py-24 overflow-x-clip"
      style={{ cursor: `url(${customCursor.src}), auto` }}
    >
      <div className="container relative">
        <motion.div
          ref={leftDesignScope}
          initial={{ opacity: 0, x: -200, y: 200 }}
          className="absolute -left-60 top-16 hidden lg:block"
          drag
        >
          <Image
            src={designExample1Image}
            alt=""
            placeholder="blur"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={rightDesignScope}
          initial={{ opacity: 0, x: 200, y: 200 }}
          className="absolute -right-[380px] -top-16  hidden lg:block"
          drag
        >
          <Image
            src={designExample2Image}
            alt=""
            placeholder="blur"
            draggable={false}
          />
        </motion.div>
        <motion.div
          ref={andreaPointerScope}
          initial={{ opacity: 0, y: 100, x: -200 }}
          className="absolute left-56 top-96  hidden lg:block"
        >
          <Pointer name="Andrea" />
        </motion.div>
        <motion.div
          ref={bryanPointerScope}
          initial={{ opacity: 0, y: 100, x: 200 }}
          className="absolute right-80 -top-4  hidden lg:block "
        >
          <Pointer name="Bryan" color="red" />
        </motion.div>
        <div className="flex justify-center">
          <div className="inline-flex py-1 px-3 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full text-neutral-950 font-semibold">
            ✨ $7.5M seed round raised
          </div>
        </div>
        <h1 className="text-6xl font-medium text-center mt-6 md:text-7xl lg:text-8xl ">
          Impactful design, crafted effortlessly
        </h1>
        <p className="text-center text-xl text-white/50 mt-8 max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          necessitatibus totam eveniet iure eum. Excepturi nobis animi laborum
          tempore veritatis explicabo
        </p>
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
