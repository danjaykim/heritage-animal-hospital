import { Link } from 'react-router-dom'
import heroFrenchie from '../../assets/images/hero-frenchie.webp'
import CtaButton from './CtaButton'

export default function Hero() {
    return (
        <main className="bg-[#F5F3EF] pt-8 md:pt-16 lg:pb-12">
            <div className="containers flex flex-col lg:flex-row justify-between">
                <div className="hero-content lg:w-[60%] flex items-center mb-10">
                    <div className="flex flex-col gap-6 md:gap-8">
                        <h1
                            className="font-nyght text-[2.5rem] tracking-wide
                            leading-none md:text-5xl lg:text-[3.5rem] text-[#1A2954]"
                        >
                            Your Trusted Partner in Pet Health&nbsp;
                            <span className="hidden md:inline">
                                - Caring for Animals, Big and Small.
                            </span>
                        </h1>
                        <p className="text-[#1A2954] font-light leading-6 md:text-[1.1rem] w-3/4">
                            {/* Proudly serving expert care for{' '}
                            <span className="font-medium">small animals</span>{' '}
                            and <span className="font-medium">equine</span>{' '}
                            throughout Northwest Arkansas and beyond */}
                            Delivering Exceptional Veterinary Care with
                            Compassion, Integrity, and Commitment{' '}
                            <span className="hidden md:inline">
                                to Grow the Human-Animal Bond
                            </span>
                        </p>
                        <CtaButton
                            to="/"
                            showArrowSvg={true}
                            className="lg:hidden text-[.9rem] w-fit px-5 py-3"
                        >
                            <span>Book Appointment</span>
                        </CtaButton>
                        <Link
                            to="/"
                            className="hidden md:inline-block md:w-fit text-[#1A2954]
                            font-extralight border-b border-[#405764] hover:text-[#3F5E98] 
                            transition-colors duration-200 leading-none z-10"
                        >
                            Learn about our services
                        </Link>
                    </div>
                </div>
                <img
                    src={heroFrenchie}
                    alt="French Bulldog Puppy"
                    className="md:mx-auto md:w-[75%] md:-mt-20 lg:w-[40%] lg:mt-0 z-0"
                />
            </div>
        </main>
    )
}
