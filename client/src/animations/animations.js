export const menuPulldown = {
    open: {
        y: 0,
        transition: {
            type: 'spring',
            stiffness: 250,
            damping: 30,
        },
    },
    close: {
        y: -400,
        transition: {
            type: 'spring',
            stiffness: 250,
            damping: 30,
        },
    },
}

export const subMenuPulldown = {
    open: {
        scaleY: 1,
        opacity: 1,
        transition: {
            scaleY: { type: 'spring', stiffness: 250, damping: 30 },
            opacity: { duration: 0.3 },
        },
    },
    close: {
        scaleY: 0,
        opacity: 0,
        transition: {
            scaleY: { type: 'spring', stiffness: 250, damping: 30 },
            opacity: { duration: 0.3 },
        },
    },
}

export const rotatingServicesVariants = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
}

export const faqDropdown = {
    open: {
        y: 0,
        opacity: 1,
        height: 'auto',
    },
    close: {
        y: 5,
        opacity: 0,
        height: 0,
    },
}
