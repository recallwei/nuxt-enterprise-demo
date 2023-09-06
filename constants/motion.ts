export const Motion = {
  scrollBottom: {
    initial: {
      opacity: 0,
      y: 100
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 50,
        mass: 1
      }
    }
  },
  scrollBottomVisible: {
    initial: {
      opacity: 0,
      y: 100
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: 'spring',
        stiffness: 250,
        damping: 50,
        mass: 1
      }
    }
  },
  imageScrollBottom: {
    initial: {
      opacity: 0,
      y: 50
    },
    enter: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 100,
        type: 'keyframes',
        ease: 'easeIn'
      }
    }
  }
}
