export const HERO_ANIMATION_CONFIG = {
  leftImage: {
    initial: { opacity: 0, x: -200, y: 200 },
    className: "absolute -left-60 top-16 hidden lg:block",
    delay: 0,
  },
  rightImage: {
    initial: { opacity: 0, x: 200, y: 200 },
    className: "absolute -right-[380px] -top-16 hidden lg:block",
    delay: 1.5,
  },
  andreaPointer: {
    initial: { opacity: 0, x: -200, y: 100 },
    className: "absolute left-56 top-96 hidden lg:block",
    delay: 0,
  },
  bryanPointer: {
    initial: { opacity: 0, x: 200, y: 100 },
    className: "absolute right-80 -top-4 hidden lg:block",
    delay: 1.5,
  },
};
