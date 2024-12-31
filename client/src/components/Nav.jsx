import { useState, useEffect, useRef } from 'react'
import { motion } from 'motion/react'
import Hamburger from 'hamburger-react'
import NavLinks from './NavLinks'
import logo from '../assets/images/heri-logo.png'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [navBottomBorderShadow, setNavBottomBorderShadow] = useState(false)
    const navRef = useRef(null)

    useEffect(() => {
        const handleOutsideNavClick = (event) => {
            if (navRef.current && !navRef.current.contains(event.target))
                setIsMenuOpen(false)
        }
        document.addEventListener('mousedown', handleOutsideNavClick)
        return () =>
            document.removeEventListener('mousedown', handleOutsideNavClick)
    }, [])

    useEffect(() => {
        const handleScroll = () => setNavBottomBorderShadow(scrollY > 100)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const menuPulldown = {
        open: {
            y: 0,
            // transform: 'translateY(0)',
            transition: {
                type: 'spring',
                stiffness: 250,
                damping: 30,
            },
        },
        close: {
            y: -400,
            // transform: 'translateY(-100%)',
            transition: {
                type: 'spring',
                stiffness: 250,
                damping: 30,
            },
        },
    }

    return (
        <nav
            ref={navRef}
            className={`sticky top-0 w-full z-50 bg-white transition-shadow ease-in-out duration-200 ${navBottomBorderShadow ? 'shadow-md' : ''}`}
        >
            <div className="relative py-1 bg-white">
                <div className="containers flex items-center justify-between">
                    {/* LOGO */}
                    <img src={logo} alt="Heritage Logo" className="w-[75px]" />

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
                    <NavLinks className="hidden lg:flex lg:gap-10 text-[#5A5C50] text-sm font-medium" />
                </div>

                {/* MOBILE NAV MENU/LINKS OPEN */}
                <motion.div
                    initial="close"
                    animate={isMenuOpen ? 'open' : 'close'}
                    variants={menuPulldown}
                    className="absolute -z-10 top-full w-full py-6 bg-[#F8F4EC]/70 backdrop-blur-sm lg:hidden"
                >
                    <NavLinks className="flex flex-col items-center gap-4 text-[#5A5C50] text-lg" />
                </motion.div>
            </div>
        </nav>
    )
}
