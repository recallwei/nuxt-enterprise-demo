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
  }
}
