import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Hamburger from 'hamburger-react'
import NavLinks from './NavLinks'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleOutsideNavClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target))
                setIsMenuOpen(false)
        }
        document.addEventListener('mousedown', handleOutsideNavClick)
        return () =>
            document.removeEventListener('mousedown', handleOutsideNavClick)
    })

    const menuPulldown = {
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

    return (
        <nav ref={navRef} className="sticky top-0 w-full z-50 bg-white">
            <div className="relative bg-white">
                <div className="containers flex items-center justify-between py-4">
                    {/* LOGO */}
                    <p>Heritage of NWA</p>

                    {/* HAMBURGER ICON */}
                    <div className="lg:hidden">
                        <Hamburger
                            toggled={isMenuOpen}
                            toggle={setIsMenuOpen}
                            direction="right"
                            size={25}
                            rounded
                            label="Open Hamburger Menu"
                        />
                    </div>

                    {/* DESKTOP NAV MENU/LINKS */}
                    <NavLinks className="hidden lg:flex lg:gap-6" />
                </div>

                {/* MOBILE NAV MENU/LINKS OPEN */}
                <motion.div
                    initial="close"
                    animate={isMenuOpen ? 'open' : 'close'}
                    variants={menuPulldown}
                    className="absolute -z-10 top-full w-full py-6 bg-neutral-200 lg:hidden"
                >
                    <NavLinks className="flex flex-col items-center gap-4" />
                </motion.div>
            </div>
        </nav>
    )
}
