import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from './navLinkData'
import { motion } from 'motion/react'
import { subMenuPulldown } from '../../animations/animations'

export default function NavLinks({ className, isMobile }) {
    const [currentDropdown, setCurrentDropdown] = useState(null)
    const [isTouchDevice, setIsTouchDevice] = useState(false)
    const dropdownRef = useRef(null)

    useEffect(() => {
        const checkIfTouchDevice = () => {
            const touchDevice =
                'ontouchstart' in window || navigator.maxTouchPoints > 0
            setIsTouchDevice(touchDevice)
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

    // Large touch devices
    const handleDropdownClick = (event, index, hasDropdown) => {
        if (isTouchDevice && !isMobile && hasDropdown) {
            // // if dropdown is already open, allow normal navigation path
            // if (currentDropdown === index) return

            // // prevent navigation and toggle dropdown menu
            // event.preventDefault()
            // setCurrentDropdown((prev) => (prev === index ? null : index))

            // Prevent navigation on first click if dropdown is not already open
            if (currentDropdown !== index) {
                event.preventDefault()
                setCurrentDropdown(index)
                return
            }

            // If dropdown is already open, allow normal navigation path
            setCurrentDropdown(null)
        }
    }

    // console.log({ isTouchDevice, devicePixelRatio: window.devicePixelRatio })

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
                            className="flex items-center"
                        >
                            {link.title}
                            {link.hasDropdown && !isMobile && (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="12"
                                    height="12"
                                    viewBox="0 0 24 24"
                                    className="mb-[.1rem] ml-[.35rem]"
                                >
                                    <path
                                        d="M12 17.414 3.293 8.707l1.414-1.414L12 14.586l7.293-7.293 1.414 1.414L12 17.414z"
                                        strokeWidth="2"
                                        stroke="currentColor"
                                    />
                                </svg>
                            )}
                        </NavLink>

                        {/* Dropdown Menu Hover */}
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
                                    className="subdropdown-menu absolute rounded top-full pointer-events-auto 
                                    w-auto origin-top drop-shadow-md px-4 pb-4 pt-6 bg-white"
                                >
                                    <ul className="flex flex-col items-start text-[#1A2954]">
                                        {link.dropdownLinks.map(
                                            (sublink, subIndex) => {
                                                return (
                                                    <li key={subIndex}>
                                                        <NavLink
                                                            to={sublink.path}
                                                            className="font-light whitespace-nowrap px-2 py-1 hover:text-[#3F5E98]"
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
