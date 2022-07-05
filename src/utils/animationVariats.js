export const scrollAnimateUp = {
  initial: { opacity: 0, y: 50 },
  animate: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
export const scrollFadeIn = {
  initial: { opacity: 0 },
  animate: {
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 2,
    },
  },
};
