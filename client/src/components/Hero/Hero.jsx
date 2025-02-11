import { Link } from 'react-router-dom'
// import heroFrenchie from '../../assets/images/hero-frenchie.webp'
import testImg from '../../assets/images/test.png'

export default function Hero() {
    return (
        <main className="bg-[#F5F3EF] py-8 lg:py-16">
            <div className="containers flex justify-between">
                <div className="hero-content w-[60%] flex items-center">
                    <div className="flex flex-col gap-8">
                        <h1 className="font-dm text-[2.7rem] tracking-[-0.02rem] leading-none md:text-[3.75rem] text-[#1A2954]">
                            Your trusted partner in pet health - caring for
                            animals, big and small.
                        </h1>
                        <p className="text-[#1A2954] font-extralight tracking-wide leading-6 md:text-[1.1rem] lg:w-[60%]">
                            {/* Proudly serving expert care for{' '}
                            <span className="font-medium">small animals</span>{' '}
                            and <span className="font-medium">equine</span>{' '}
                            throughout Northwest Arkansas and beyond */}
                            Delivering Exceptional Veterinary Care with
                            Compassion, Integrity, and Commitment{' '}
                            <span className="hidden lg:inline">
                                to Grow the Human-Animal Bond
                            </span>
                        </p>
                        <Link
                            to="/"
                            className="hidden md:inline-block md:w-fit text-[#1A2954] font-extralight 
                    border-b border-[#405764] hover:text-[#3F5E98] transition-colors duration-200 leading-none"
                        >
                            Learn about our services
                        </Link>
                    </div>
                </div>
                <img
                    src={testImg}
                    alt="French Bulldog Puppy"
                    className="w-[40%]"
                />
            </div>
        </main>
    )
}
