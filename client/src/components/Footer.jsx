import { Link } from 'react-router-dom'
import logo from '../assets/images/heri-logo.webp'

export default function Footer() {
    return (
        <footer className="bg-[#F5F3EF] text-[#1A2954] font-extralight pt-20 pb-10">
            <div className="containers">
                <div className="flex flex-col md:flex-row md:justify-between gap-14">
                    <img
                        src={logo}
                        alt="Heritage Animal Hospital Logo"
                        className="w-[65px] h-fit md:w-[80px]"
                    />
                    <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-none gap-8 lg:gap-12">
                        <div>
                            <p className="font-semibold mb-2">About</p>
                            <div>
                                <Link
                                    to="/about#our-team"
                                    className="w-fit block"
                                >
                                    Our Team
                                </Link>
                                <Link
                                    to="/about#our-mission"
                                    className="w-fit block"
                                >
                                    Our Mission
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Services</p>
                            <div>
                                <Link
                                    to="/services#small-animal"
                                    className="w-fit block"
                                >
                                    Small Animal
                                </Link>
                                <Link
                                    to="/services#equine-livestock"
                                    className="w-fit block"
                                >
                                    Equine/Livestock
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Resources</p>
                            <div>
                                <Link
                                    to="resources/faq"
                                    className="w-fit block"
                                >
                                    FAQ
                                </Link>
                                <Link
                                    to="/resources/appointments"
                                    className="w-fit block"
                                >
                                    Appointments
                                </Link>
                            </div>
                        </div>
                        <div>
                            <p className="font-semibold mb-2">Contact</p>
                            <div>
                                <p>Phone</p>
                                <p>Email</p>
                            </div>
                        </div>
                    </div>
                </div>
                <p className="mt-20">
                    © {new Date().getFullYear()} Heritage Animal Hospital. All
                    Rights Reserved.
                </p>
            </div>
        </footer>
    )
}
