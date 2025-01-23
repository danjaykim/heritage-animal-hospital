import { useState, useEffect } from 'react'
import { rotatingServicesVariants } from '../../animations/animations'

export default function RotatingServices() {
    return (
        <section className="care-overview containers flex justify-center items-center my-8 lg:my-12 border-4">
            <div className="flex flex-col items-center text-[2.5rem] lg:text-6xl">
                <h2 className="text-[#1A2954] font-bold">
                    We provide care for
                </h2>
                <p className="text-[#3F5E98] -mt-4 lg:mt-0">
                    musculoskeletal issues
                </p>
            </div>
        </section>
    )
}
