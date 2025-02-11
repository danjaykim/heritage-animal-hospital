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
                        <CtaButton to="/">
                            <div className="flex items-center gap-2">
                                <span>Book Appointment</span>
                                {/* Copyright - 2025 alexmaracinaru (Alex Maracinaru) 
                                Permission is hereby granted, free of charge, to any person obtaining a copy of this 
                                software and associated documentation files (the “Software”), to deal in the Software
                                without restriction, including without limitation the rights to use, copy, modify, merge,
                                publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
                                to whom the Software is furnished to do so, subject to the following conditions:
                                The above copyright notice and this permission notice shall be included in all copies or
                                substantial portions of the Software.
                                THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
                                INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                                PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
                                FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                                ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                                IN THE SOFTWARE. */}
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 74 74"
                                    className="w-[34px] transform duration-300 ease-in-out group-hover:translate-x-1.5"
                                >
                                    <circle
                                        strokeWidth="3"
                                        stroke="#fff"
                                        r="35.5"
                                        cy="37"
                                        cx="37"
                                    ></circle>
                                    <path
                                        fill="#fff"
                                        d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284
                                    24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749
                                    49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076
                                    37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 
                                    37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 
                                    36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924
                                    39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                                    ></path>
                                </svg>
                            </div>
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
