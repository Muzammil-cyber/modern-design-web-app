import { useEffect } from "react";
import { AnimationControls, useAnimate } from "framer-motion";

type AnimationPair = [React.MutableRefObject<null>, AnimationControls];

export function useHeroAnimations() {
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

  return {
    leftDesignScope,
    rightDesignScope,
    andreaPointerScope,
    bryanPointerScope,
  };
}
