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
        <div className="flex flex-col items-center text-[2.7rem] md:text-[3.2rem] lg:text-7xl">
            <h2 className="font-dm text-[#1A2954]">We provide care for</h2>
            <AnimatePresence mode="wait">
                <motion.p
                    key={rotatingServices[currServiceIndex]}
                    variants={rotatingServicesVariants}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    transition={{ duration: 0.5 }}
                    className="font-dm text-[#3F5E98] -mt-4 lg:mt-0"
                >
                    {rotatingServices[currServiceIndex]}
                </motion.p>
            </AnimatePresence>
            <Link
                to="/services"
                className="text-[#1A2954] text-base font-medium mt-1 md:mt-4"
            >
                See all of our services
            </Link>
        </div>
    )
}
