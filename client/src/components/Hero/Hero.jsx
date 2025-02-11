import { Link } from 'react-router-dom'
import heroFrenchie from '../../assets/images/hero-frenchie.webp'

export default function Hero() {
    return (
        <main
            className="relative flex flex-col justify-between"
            // style={{ minHeight: `calc(100dvh - 65px)` }}
            // style={{ minHeight: `100dvh` }}
        >
            <img
                src={heroFrenchie}
                alt="French Bulldog Puppy"
                className="w-full min-h-screen lg:min-h-0 lg:max-h-[830px] object-cover"
            />
            <div
                className="hero-content w-[90%] lg:max-w-[1400px] left-1/2 
                    transform -translate-x-1/2 absolute flex flex-col gap-4 md:gap-6 mt-6 md:mt-12"
            >
                <h1 className="font-dm text-[2.7rem] tracking-[-0.02rem] leading-none md:text-6xl lg:text-7xl w-[75%] md:w-[90%] lg:w-[60%] text-[#1A2954]">
                    {/* Delivering Exceptional Veterinary Care with Compassion,
                    Integrity, and Commitment{' '}
                    <span className="hidden lg:inline">
                        to Grow the Human-Animal Bond
                    </span> */}
                    Your Partner in Pet Health
                </h1>
                <p className="text-[#1A2954] md:w-[75%] lg:w-[35%] font-extralight tracking-wide leading-6 md:text-[1.2rem]">
                    Proudly serving expert care for{' '}
                    <span className="font-medium">small animals</span> and{' '}
                    <span className="font-medium">equine</span> throughout
                    Northwest Arkansas and beyond
                </p>
                <Link
                    to="/"
                    className="hidden md:inline-block md:w-fit text-[#1A2954] font-extralight 
                    border-b border-[#405764] hover:text-[#3F5E98] transition-colors duration-200 leading-none"
                >
                    Learn about our services
                </Link>
            </div>
        </main>
    )
}
