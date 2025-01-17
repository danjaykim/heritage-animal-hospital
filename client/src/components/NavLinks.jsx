import { useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function NavLinks({ className, isMobile }) {
    const [isSubDropdownOpen, setIsSubDropdownOpen] = useState(false)
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

    return (
        <ul className={className}>
            {navLinks.map((link, index) => {
                return (
                    <li key={index}>
                        <NavLink to={link.path}>{link.title}</NavLink>
                    </li>
                )
            })}
        </ul>
    )
}
