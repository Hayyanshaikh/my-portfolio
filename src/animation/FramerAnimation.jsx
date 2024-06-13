export const fadeVariant = {
  initial: {
    x: 0, // Change this value to -50 for left or 50 for right
    opacity: 0,
  },
  animate: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const fadeUpVariant = {
  initial: {
    y: 50,
    opacity: 0,
  },

  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 0.8
    },
  })
};

export const fadeDownVariant = {
  initial: {
    y: -50,
    opacity: 0,
  },
  animate: (custom) => ({
    y: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const fadeRightVariant = {
  initial: {
    x: -50,
    opacity: 0,
  },
  animate: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 0.8
    },
  }),
};

export const fadeLeftVariant = {
  initial: {
    x: 50,
    opacity: 0,
  },
  animate: (custom) => ({
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 0.8
    },
  }),
};

// zoom variant

export const zoomInVariant = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const zoomOutVariant = {
  initial: {
    scale: 1.5,
    opacity: 0,
  },
  animate: (custom) => ({
    scale: 1,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const zoomInOutVariant = {
  initial: {
    scale: 0.9,
    opacity: 0,
  },
  animate: (custom) => ({
    scale: [0.5, 1.5, 1],
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const zoomInLeftVariant = {
  initial: {
    scale: 0.9,
    x: -50,
    opacity: 0,
  },
  animate: (custom) => ({
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};

export const zoomInRightVariant = {
  initial: {
    scale: 0.9,
    x: 50,
    opacity: 0,
  },
  animate: (custom) => ({
    scale: 1,
    x: 0,
    opacity: 1,
    transition: {
      delay: 0.2 * custom,
      ease: "easeInOut",
      duration: 1,
    },
  }),
};
