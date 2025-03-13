import { Link } from 'react-router-dom'
import logo from '../assets/images/heri-logo.webp'
import { navLinks } from './Nav/navLinkData'

export default function Footer() {
    return (
        <footer className="bg-[#F5F3EF] text-[#1A2954] font-extralight pt-20 pb-10">
            <div className="containers">
                <div className="flex flex-col md:flex-row md:justify-between gap-14">
                    <img
                        src={logo}
                        alt="Heritage Animal Hospital Logo"
                        className="w-[65px] md:w-[80px]"
                    />
                    <div
                        className="grid grid-rows-2 grid-cols-2 
                        md:grid-cols-4 md:grid-rows-none gap-8 lg:gap-12"
                    >
                        {navLinks
                            .slice(0, navLinks.length - 1)
                            .map((link, index) => {
                                return (
                                    <div key={index}>
                                        <p className="text-[#1A2954] font-semibold text-sm mb-2">
                                            {link.title}
                                        </p>
                                        {link.dropdownLinks.map(
                                            (subLink, subIndex) => {
                                                return (
                                                    <Link
                                                        key={subIndex}
                                                        to={subLink.path}
                                                        className="text-[#1A2954] hover:underline
                                                        hover:underline-offset-4 w-fit block text-sm"
                                                    >
                                                        {subLink.title}
                                                    </Link>
                                                )
                                            }
                                        )}
                                    </div>
                                )
                            })}
                        <div>
                            <p className="font-semibold text-sm mb-2">
                                Contact
                            </p>
                            <div className="text-sm">
                                <p>Phone</p>
                                <p>Email</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="text-sm mt-20">
                    © {new Date().getFullYear()} Heritage Animal Hospital. All
                    Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
