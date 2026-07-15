export const scheduleItemVariants = {
  hidden: {
    opacity: 0,
    x: 50,
  },

  visible: (index) => ({
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.55,
      delay: index * 0.12,
      ease: "easeOut",
    },
  }),
};

export const scheduleDotVariants = {
  hidden: {
    scale: 0,
  },

  visible: {
    scale: 1,

    transition: {
      delay: 0.15,
      duration: 0.35,
    },
  },
};

export const scheduleTimeVariants = {
  hidden: {
    opacity: 0,
    x: -20,
  },

  visible: {
    opacity: 1,
    x: 0,

    transition: {
      duration: 0.4,
    },
  },
};