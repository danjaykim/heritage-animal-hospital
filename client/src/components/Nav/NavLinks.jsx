import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from './navLinkData'
import { motion } from 'motion/react'

export default function NavLinks({ className, isMobile }) {
    const [currentDropdown, setCurrentDropdown] = useState(null)
    const [isTouchDevice, setIsTouchDevice] = useState(false)
    const dropdownRef = useRef(null)

    console.log(isTouchDevice)

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

    // Large touch devices
    const handleDropdownClick = (event, index, hasDropdown) => {
        if (isTouchDevice && !isMobile && hasDropdown) {
            // if dropdown is already open, allow normal navigation path
            if (currentDropdown === index) return

            // prevent navigation and toggle dropdown menu
            event.preventDefault()
            setCurrentDropdown((prev) => (prev === index ? null : index))
        }
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
                            !isTouchDevice &&
                            !isMobile &&
                            link.hasDropdown &&
                            setCurrentDropdown(index)
                        }
                        onMouseLeave={() =>
                            !isTouchDevice &&
                            !isMobile &&
                            link.hasDropdown &&
                            setCurrentDropdown(null)
                        }
                    >
                        <NavLink
                            to={link.path}
                            onClick={(event) =>
                                handleDropdownClick(
                                    event,
                                    index,
                                    link.hasDropdown
                                )
                            }
                        >
                            {link.title}
                        </NavLink>

                        {/* Desktop Nav Link Hover */}
                        {!isMobile &&
                            // !isTouchDevice &&
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
                                    className="subdropdown-menu absolute rounded top-full pointer-events-auto 
                                    w-auto origin-top drop-shadow-md px-4 pt-6 pb-4 bg-white"
                                >
                                    <ul className="flex flex-col items-start text-[#1A2954]">
                                        {link.dropdownLinks.map(
                                            (sublink, subIndex) => {
                                                return (
                                                    <li key={subIndex}>
                                                        <NavLink
                                                            to={sublink.path}
                                                            className="text-[1.1rem] font-light whitespace-nowrap hover:text-[#3F5E98]"
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
