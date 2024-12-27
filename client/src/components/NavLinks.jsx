import { NavLink } from 'react-router-dom'

export default function NavLinks({ className }) {
    const navLinks = [
        { title: 'HOME', path: '/' },
        { title: 'ABOUT US', path: '/' },
        { title: 'SERVICES', path: '/' },
        { title: 'RESOURCES', path: '/' },
        { title: 'CONTACT', path: '/' },
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
