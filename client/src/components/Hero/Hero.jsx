import { Link } from 'react-router-dom'
import heroFrenchie from '../../assets/images/hero-frenchie.webp'
import HeroButton from './HeroButton'

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
                <HeroButton to="/test">
                    <div className="flex items-center gap-2">
                        <span>Book Appointment</span>
                        {/* Copyright - 2025 alexmaracinaru (Alex Maracinaru) 
                            Permission is hereby granted, free of charge, to any person obtaining a copy of this 
                            software and associated documentation files (the “Software”), to deal in the Software
                            without restriction, including without limitation the rights to use, copy, modify, merge,
                            publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons
                            to whom the Software is furnished to do so, subject to the following conditions:
                            The above copyright notice and this permission notice shall be included in all copies or
                            substantial portions of the Software.
                            THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, 
                            INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR
                            PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE
                            FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
                            ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS
                            IN THE SOFTWARE. */}
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 74 74"
                            className="w-[34px] transform duration-300 ease-in-out group-hover:translate-x-1.5"
                        >
                            <circle
                                strokeWidth="3"
                                stroke="#fff"
                                r="35.5"
                                cy="37"
                                cx="37"
                            ></circle>
                            <path
                                fill="#fff"
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
                </HeroButton>
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
