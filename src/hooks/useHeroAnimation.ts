import { AnimationScope, Easing, useAnimate } from "framer-motion";
import { useEffect } from "react";

interface AnimationConfig {
    initial?: {
        delay?: number;
    };
    animate: {
        x?: number | number[];
        y?: number | number[];
        ease?: Easing

    }[];

}

export const useHeroAnimation = () => {
    const [leftDesignScope, leftDesignAnimate] = useAnimate();
    const [rightDesignScope, rightDesignAnimate] = useAnimate();
    const [andreaPointerScope, andreaPointerAnimate] = useAnimate();
    const [bryanPointerScope, bryanPointerAnimate] = useAnimate();

    const animation = (scope: AnimationScope, animateFn: ReturnType<typeof useAnimate>[1], config: AnimationConfig) => {
        const { initial, animate } = config

        if (animate.length === 0) {
            return;
        }

        return animateFn([
            [scope.current, { opacity: 1 }, { duration: 0.5, delay: initial?.delay }],
            // @ts-expect-error length ok
            ...animate.map((an) =>
                [scope.current,
                { x: an.x, y: an.y },
                { duration: 0.5, ease: an.ease }]
            )
        ])

    }

    useEffect(() => {
        animation(leftDesignScope, leftDesignAnimate, {
            animate: [{ x: 0, y: 0 }]
        })
        // leftDesignAnimate([
        //     [leftDesignScope.current, { opacity: 1 }, { duration: 0.5 }],
        //     [leftDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],
        // ]);

        animation(rightDesignScope, rightDesignAnimate, {
            initial: { delay: 1.5 },
            animate: [{ x: 0, y: 0 }]
        }
        )
        // rightDesignAnimate([
        //     [rightDesignScope.current, { opacity: 1 }, { duration: 0.5, delay: 1.5 }],
        //     [rightDesignScope.current, { x: 0, y: 0 }, { duration: 0.5 }],

        // ]);

        animation(andreaPointerScope, andreaPointerAnimate, {
            animate: [{ x: -100, y: 0 }, { x: 0, y: [0, 16, 0], ease: "easeInOut" }]
        })
        // andreaPointerAnimate([
        //     [andreaPointerScope.current, { opacity: 1 }, { duration: 0.5 }],
        //     [andreaPointerScope.current, { x: -100, y: 0 }, { duration: 0.5 }],
        //     [
        //         andreaPointerScope.current,
        //         { x: 0, y: [0, 16, 0] },
        //         { duration: 0.5, ease: "easeInOut" },
        //     ],
        // ]);

        animation(bryanPointerScope, bryanPointerAnimate, {
            initial: { delay: 1.5 },
            animate: [{ x: 0, y: 100 }, { x: [0, 16, 0], y: 0, ease: "easeInOut" }]
        })
        // bryanPointerAnimate([
        //     [
        //         bryanPointerScope.current,
        //         { opacity: 1 },
        //         { duration: 0.5, delay: 1.5 },
        //     ],
        //     [bryanPointerScope.current, { x: 0, y: 100 }, { duration: 0.5 }],
        //     [
        //         bryanPointerScope.current,
        //         { x: [0, 16, 0], y: 0 },
        //         { duration: 0.5, ease: "easeInOut" },
        //     ],
        // ]);


    }, []);

    return {
        leftDesignScope,
        rightDesignScope,
        andreaPointerScope,
        bryanPointerScope,
    };
};
