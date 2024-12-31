import { NavLink } from 'react-router-dom'

export default function NavLinks({ className }) {
    const navLinks = [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/' },
        { title: 'Services', path: '/' },
        { title: 'Resources', path: '/' },
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
