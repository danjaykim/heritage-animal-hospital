import { useState } from 'react'
import Hamburger from 'hamburger-react'
import NavLinks from './NavLinks'

export default function Nav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <>
            <nav className="containers flex justify-between items-center border-2">
                {/* LOGO */}
                <p>Heritage of NWA</p>

                {/* HAMBURGER ICON */}
                <div className="lg:hidden">
                    <Hamburger
                        toggled={isMenuOpen}
                        toggle={setIsMenuOpen}
                        size={25}
                        rounded
                        label="Open Hamburger Menu"
                    />
                </div>

                {/* DESKTOP NAV MENU/LINKS */}
                <NavLinks className="hidden lg:flex lg:gap-6" />
            </nav>
        </>
    )
}
