import logo from '../assets/images/heri-logo.webp'

export default function Footer() {
    return (
        <footer className="bg-[#F5F3EF] text-[#1A2954] font-extralight pt-16 pb-8">
            <div className="containers">
                <div className="flex flex-col md:flex-row md:justify-between gap-14">
                    <img
                        src={logo}
                        alt="Heritage Animal Hospital Logo"
                        className="w-[65px] h-fit md:w-[80px]"
                    />
                    <div className="grid grid-rows-2 grid-cols-2 md:grid-cols-4 md:grid-rows-none gap-8 lg:gap-12">
                        <div>
                            <p className="mb-2">About</p>
                            <div>
                                <p>Our Team</p>
                                <p>Our Mission</p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-2">Services</p>
                            <div>
                                <p>Small Animal</p>
                                <p>Equine/Livestock</p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-2">Resources</p>
                            <div>
                                <p>FAQ</p>
                                <p>Appointments</p>
                            </div>
                        </div>
                        <div>
                            <p className="mb-2">Contact</p>
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
