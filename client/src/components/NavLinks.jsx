import { useState, useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks({ className, isMobile }) {
    const [currentDropdown, setCurrentDropdown] = useState(null)
    const [isTouchDevice, setIsTouchDevice] = useState(false)
    const dropdownRef = useRef(null)

    const navLinks = [
        { title: 'Home', path: '/' },
        {
            title: 'About',
            path: '/about',
            dropdown: true,
            dropdownLinks: [
                { title: 'Our Team', path: '/about#our-team' },
                { title: 'Our Mission', path: '/about#our-mission' },
            ],
        },
        {
            title: 'Services',
            path: '/services',
            dropdown: true,
            dropdownLinks: [
                { title: 'Small Animal', path: '/services#small-animal' },
                {
                    title: 'Equine / Live Stock',
                    path: '/services#equine-livestock',
                },
            ],
        },
        {
            title: 'Resources',
            path: '/resources',
            dropdown: true,
            dropdownLinks: [
                {
                    title: 'Request Appointment',
                    path: '/resources/appointment',
                },
                { title: 'FAQ', path: '/resources/faq' },
            ],
        },
        { title: 'Contact', path: '/' },
    ]

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

    return (
        <ul ref={dropdownRef} className={className}>
            {navLinks.map((link, index) => {
                return (
                    <li
                        key={index}
                        className={`flex justify-center ${link.dropdown ? 'relative' : ''}`}
                        onMouseEnter={() =>
                            !isTouchDevice &&
                            link.dropdown &&
                            setCurrentDropdown(index)
                        }
                        onMouseLeave={() =>
                            !isTouchDevice &&
                            link.dropdown &&
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
                            link.dropdown &&
                            currentDropdown === index && (
                                <ul className="subdropdown-menu absolute top-full flex flex-col items-center w-48 p-4 bg-slate-200">
                                    {link.dropdownLinks.map(
                                        (sublink, subIndex) => {
                                            return (
                                                <li key={subIndex}>
                                                    <NavLink to={sublink.path}>
                                                        {sublink.title}
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
