import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import { navLinks } from './NavLinkData'

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

    console.log(navLinks)

    return (
        <ul ref={dropdownRef} className={className}>
            {navLinks.map((link, index) => {
                return (
                    <li
                        key={index}
                        className={`flex justify-center ${link.hasDropdown ? 'relative' : ''}`}
                        onMouseEnter={() =>
                            !isTouchDevice &&
                            link.hasDropdown &&
                            setCurrentDropdown(index)
                        }
                        onMouseLeave={() =>
                            !isTouchDevice &&
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
                                <ul className="subdropdown-menu shadow-md absolute top-full flex flex-col items-start w-auto px-4 py-5 bg-slate-200">
                                    {link.dropdownLinks.map(
                                        (sublink, subIndex) => {
                                            return (
                                                <li key={subIndex}>
                                                    <NavLink
                                                        to={sublink.path}
                                                        className="lg:whitespace-nowrap"
                                                    >
                                                        {sublink.title}{' '}
                                                    </NavLink>
                                                </li>
                                            )
                                        }
                                    )}
                                </ul>
                            )}
                    </li>
                )
            })}
        </ul>
    )
}
