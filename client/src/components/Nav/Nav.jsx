import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'motion/react'
import Hamburger from 'hamburger-react'
import NavLinks from './NavLinks'
import logo from '../../assets/images/heri-logo.webp'
import { menuPulldown } from '../../animations/animations'
import CtaButton from '../Hero/CtaButton'

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

    return (
        <nav ref={navRef} className="sticky top-0 w-full z-50">
            <div
                className={`relative py-3 lg:py-5 bg-white transition-all ease-in-out duration-500 ${navBottomBorderShadow ? 'lg:bg-white shadow-md' : 'lg:bg-[#F5F3EF]'}`}
            >
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

                    {/* PHONE / HAMBURGER */}
                    <div className="lg:hidden flex items-center gap-2">
                        <a href="tel:+1234567890">
                            {/* https://svgbox.net/ */}
                            <svg
                                width="24"
                                height="24"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                color="#1A2954"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 
                                    11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 
                                    01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                                />
                            </svg>
                        </a>
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
                    <div className="hidden text-[.9rem] lg:flex lg:gap-8">
                        <NavLinks
                            isMobile={isMobile}
                            className="lg:flex lg:gap-8 tracking-wide text-[#1A2954]"
                        />
                        <CtaButton to="/" showArrowSvg={true}>
                            <span>Book Appointment</span>
                        </CtaButton>
                    </div>
                </div>

                {/* MOBILE NAV MENU/LINKS OPEN */}
                <motion.div
                    initial="close"
                    animate={isMenuOpen ? 'open' : 'close'}
                    variants={menuPulldown}
                    className="absolute -z-10 top-full w-full py-4 bg-white lg:hidden"
                >
                    <NavLinks
                        isMobile={isMobile}
                        className="containers flex flex-col items-center gap-3 text-[#1A2954]"
                    />
                </motion.div>
            </div>
        </nav>
    )
}
