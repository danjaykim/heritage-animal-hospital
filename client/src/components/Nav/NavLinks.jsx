import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from './navLinkData'
import { motion } from 'motion/react'

export default function NavLinks({ className, isMobile }) {
    const [currentDropdown, setCurrentDropdown] = useState(null)
    const [isTouchDevice, setIsTouchDevice] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const checkIfTouchDevice = () => {
            setIsTouchDevice(
                'ontouchstart' in window || navigator.maxTouchPoints > 0
            )
        }
        checkIfTouchDevice()
        window.addEventListener('resize', checkIfTouchDevice)
        return () => window.removeEventListener('resize', checkIfTouchDevice)
    }, [])

    useEffect(() => {
        const handleOutsideDropdownClick = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setCurrentDropdown(null)
            }
        }
        document.addEventListener('mousedown', handleOutsideDropdownClick)
        return () =>
            document.removeEventListener(
                'mousedown',
                handleOutsideDropdownClick
            )
    }, [])

    const subMenuPulldown = {
        open: {
            y: 10,
            transition: {
                type: 'spring',
                stiffness: 250,
                damping: 30,
            },
        },
        close: {
            y: 0,
            transition: {
                type: 'spring',
                stiffness: 250,
                damping: 30,
            },
        },
    }

    return (
        <ul ref={dropdownRef} className={className}>
            {navLinks.map((link, index) => {
                return (
                    <li
                        key={index}
                        className={`
                            flex justify-center hover:text-[#3F5E98] transition-colors duration-300 
                            ${!isMobile && link.hasDropdown ? 'relative hover:underline underline-offset-1' : ''}
                        `}
                        onMouseEnter={() =>
                            // !isTouchDevice &&
                            !isMobile &&
                            link.hasDropdown &&
                            setCurrentDropdown(index)
                        }
                        onMouseLeave={() =>
                            // !isTouchDevice &&
                            !isMobile &&
                            link.hasDropdown &&
                            setCurrentDropdown(null)
                        }
                    >
                        <NavLink to={link.path}>{link.title}</NavLink>

                        {/* Touch Device (Large Screens) */}
                        {/* {!isMobile &&
                            link.dropdown &&
                            isTouchDevice &&
                            currentDropdown === index && <p>touch</p>} */}

                        {/* Desktop Nav Link Hover */}
                        {!isMobile &&
                            link.hasDropdown &&
                            currentDropdown === index && (
                                <motion.div
                                    initial="close"
                                    animate={
                                        currentDropdown === index
                                            ? 'open'
                                            : 'close'
                                    }
                                    variants={subMenuPulldown}
                                    className="subdropdown-menu absolute top-full pointer-events-auto w-auto -mt-[.5rem] drop-shadow-md px-4 pt-6 pb-4 bg-white"
                                >
                                    <ul className="flex flex-col items-start text-[#1A2954]">
                                        {link.dropdownLinks.map(
                                            (sublink, subIndex) => {
                                                return (
                                                    <li key={subIndex}>
                                                        <NavLink
                                                            to={sublink.path}
                                                            className="font-light whitespace-nowrap hover:text-[#3F5E98]"
                                                        >
                                                            {sublink.title}{' '}
                                                        </NavLink>
                                                    </li>
                                                )
                                            }
                                        )}
                                    </ul>
                                </motion.div>
                            )}
                    </li>
                )
            })}
        </ul>
    )
}
