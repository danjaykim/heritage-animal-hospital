import { Link } from 'react-router-dom'
import heroFrenchie from '../assets/images/hero-frenchie-lightgray.webp'

export default function Hero() {
    return (
        <main
            className="relative overflow-hidden flex flex-col justify-between"
            style={{ height: `calc(100vh - 70px)` }}
        >
            <div className="hero-words w-[90%] lg:max-w-[1400px] left-1/2 transform -translate-x-1/2 absolute flex flex-col justify-center mt-8 lg:mt-14">
                <div className="mobile-content text-[#405764] md:hidden">
                    <h1 className="font-cal tracking-wide text-3xl mb-3">
                        Heritage Animal Hospital of NorthWest Arkansas
                    </h1>
                    <p className="mb-4 font-extralight">
                        Delivering Exceptional Veterinary Care with Compassion,
                        Integrity, and Commitment
                    </p>
                </div>
                <h1 className="hidden md:block font-cal text-3xl lg:text-5xl lg:w-[50%] md:text-[#405764] mb-3 md:mb-5">
                    Delivering Exceptional Veterinary Care with Compassion,
                    Integrity, and Commitment
                </h1>
                <Link
                    to="#"
                    className="cursor-pointer group transition-all duration-200 px-5 py-2 md:px-6 md:py-4 rounded-full font-medium text-sm md:text-base md:tracking-tight text-[#5A5C50] bg-[#F1E9D4]/80 hover:bg-[#F8F4EC] backdrop-blur-sm w-fit"
                >
                    {/* <span className="md:hidden">Book Appointment</span> */}
                    <div className="flex items-center gap-2">
                        <span>Book Appointment</span>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 74 74"
                            className="w-[34px] transform duration-300 ease-in-out group-hover:translate-x-1.5"
                        >
                            <circle
                                strokeWidth="3"
                                stroke="#5A5C50"
                                r="35.5"
                                cy="37"
                                cx="37"
                            ></circle>
                            <path
                                fill="#5A5C50"
                                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284
                                24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749
                                49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076
                                37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 
                                37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 
                                36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924
                                39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                            ></path>
                        </svg>
                    </div>
                </Link>
                {/* <Link to="#">Contact Us</Link> */}
            </div>
            <img
                src={heroFrenchie}
                alt="French Bulldog Puppy"
                className="w-full h-full object-cover"
            />
        </main>
    )
}
