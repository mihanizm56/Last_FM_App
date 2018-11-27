const groupInit = {
  enter: {
    y: 0,
    opacity: 1,
    delay:200,
    transition: {
      y: { type: 'spring', stiffness: 800, damping: 10 },
      default: { duration: 800 }
    }
  },
  exit: {
    y: 50,
    opacity: 0,
    transition: { duration: 350 }
  },
}

const fadeInit = {
  enter: { opacity: 1 },
  exit: { opacity: 0 }
}

const dragInit = {
	draggable: true
}

const hoverInit = {
  hoverable: true,
  pressable: true,
  init: {
    scale: 1,
    boxShadow: '0px 0px 0px rgba(0,0,0,0)'
  },
  hover: {
    scale: 1.2,
    boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
  },
  press: {
    scale: 1.1,
    boxShadow: '0px 2px 5px rgba(0,0,0,0.1)'
  }
}

const pressInit = {
  pressable: true,
  init: { scale: 1 },
  press: { scale: 0.8 }
}

const routerInit = {
  enter: { 
    opacity: 1, 
    delay: 300, 
    beforeChildren: true
  },
  exit: { 
    opacity: 0, 
  }
}

const focusInit = {
  focusable: true,
  init: {
    color: '#aaa',
    outlineWidth: '0px',
    outlineOffset: '0px',
    scale: 1
  },
  focus: {
    color: '#000',
    outlineWidth: '12px',
    outlineOffset: '5px',
    outlineColor: '#AB36FF',
    scale: 1.1
  }
}

export {fadeInit, routerInit, dragInit, hoverInit, focusInit, pressInit, groupInit}