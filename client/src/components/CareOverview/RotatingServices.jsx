import { useState, useEffect } from 'react'
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
        <section className="care-overview containers flex justify-center items-center my-8 lg:my-24">
            <div className="flex flex-col items-center text-[2.5rem] lg:text-6xl">
                <h2 className="text-[#1A2954]">We provide care for</h2>
                <AnimatePresence mode="wait">
                    <motion.p
                        key={rotatingServices[currServiceIndex]}
                        variants={rotatingServicesVariants}
                        initial="initial"
                        animate="animate"
                        exit="exit"
                        transition={{ duration: 0.5 }}
                        className="text-[#3F5E98] -mt-4 lg:mt-0"
                    >
                        {rotatingServices[currServiceIndex]}
                    </motion.p>
                </AnimatePresence>
            </div>
        </section>
    )
}
