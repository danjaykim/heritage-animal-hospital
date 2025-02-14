import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'motion/react'
import { rotatingServices } from './rotatingServicesData'
import { rotatingServicesVariants } from '../../animations/animations'

export default function RotatingServices() {
    const [currServiceIndex, setCurrServiceIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrServiceIndex((prev) => (prev + 1) % rotatingServices.length)
        }, 2000)
        return () => clearInterval(interval)
    })

    return (
        <section className="containers flex flex-col items-center text-[2.2rem] md:text-[3.2rem] lg:text-7xl">
            <h2 className="font-dm text-[#1A2954]">We provide care for</h2>
            <AnimatePresence mode="wait">
                <motion.p
                    key={rotatingServices[currServiceIndex]}
                    variants={rotatingServicesVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="font-dm text-[#3F5E98] lg:mt-1 text-center leading-tight min-h-[7rem]"
                >
                    {rotatingServices[currServiceIndex]}
                </motion.p>
            </AnimatePresence>
            <Link
                to="/services"
                className="w-fit flex items-center gap-2 group text-[#1A2954] text-base md:mt-1"
            >
                <span>See all of our services</span>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    className="-mb-[.1rem] transform duration-300 ease-in-out group-hover:translate-x-1"
                >
                    <path
                        d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
                        strokeWidth="2"
                        stroke="currentColor"
                    />
                </svg>
            </Link>
        </section>
    )
}
