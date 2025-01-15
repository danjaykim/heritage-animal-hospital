import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Hamburger from 'hamburger-react'
import NavLinks from './NavLinks'
import logo from '../assets/images/heri-logo.webp'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isMobile, setIsMobile] = useState(false)
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

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 1024)
            if (!(window.innerWidth < 1024)) setIsMenuOpen(false)
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
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
            <div className="relative py-3 bg-white">
                <div className="containers flex items-center justify-between">
                    {/* LOGO */}
                    <Link to="/" className="flex gap-1 font-jost">
                        <img
                            src={logo}
                            alt="Heritage Logo"
                            className="w-[60px] md:w-[70px]"
                        />
                        <div className="flex flex-col justify-center -mb-2 md:-mb-3">
                            <span className="text-xl md:text-4xl font-medium">
                                HERITAGE
                            </span>
                            <span className="text-[.85rem] md:text-[.95rem] text-[#405764] md:tracking-wide -mt-[.5rem] md:-mt-2">
                                Animal Hospital{' '}
                                <span className="hidden md:inline">of NWA</span>
                            </span>
                        </div>
                    </Link>

                    {/* HAMBURGER ICON (MOBILE ONLY) */}
                    <div className="lg:hidden">
                        <Hamburger
                            toggled={isMenuOpen}
                            toggle={setIsMenuOpen}
                            size={25}
                            rounded
                            label="Open Hamburger Menu"
                            color="#1A2954"
                        />
                    </div>

                    {/* DESKTOP NAV MENU/LINKS */}
                    <NavLinks className="hidden lg:flex lg:gap-10 font-medium text-[#1A2954] text-[1.2rem]" />
                </div>

                {/* MOBILE NAV MENU/LINKS OPEN */}
                <motion.div
                    initial="close"
                    animate={isMenuOpen ? 'open' : 'close'}
                    variants={menuPulldown}
                    className="absolute -z-10 top-full w-full py-6 bg-[#fff] lg:hidden"
                >
                    <NavLinks className="containers flex flex-col items-center gap-4 text-[#1A2954] text-xl tracking-wide" />
                </motion.div>
            </div>
        </nav>
    )
}
