import logo from '../assets/images/heri-logo.webp'

export default function Footer() {
    return (
        <footer className="bg-[#F5F3EF]">
            <div className="containers text-[#1A2954] font-extralight py-8 flex flex-col gap-14">
                <img
                    src={logo}
                    alt="Heritage Animal Hospital Logo"
                    className="w-[65px]"
                />
                <div className="grid grid-rows-2 grid-cols-2 gap-10">
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
                <p>
                    © {new Date().getFullYear()} Heritage Animal Hospital - All
                    Rights Reserved
                </p>
            </div>
        </footer>
    )
}
