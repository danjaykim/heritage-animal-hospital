import { forwardRef } from 'react'
import ShieldPlus from '../../assets/images/svg/shield-plus.svg?react'
import hexagonSvg from '../../assets/images/svg/hexagons.svg'
import plusSvg from '../../assets/images/svg/plus-sign.svg'

const Mission = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            id="our-mission"
            className="mt-14 lg:mt-20 py-12 md:py-16 lg:py-20 
            border-[1px] border-[#F0F2F2] bg-[#FAFCFE]
            flex flex-col items-center gap-2 scroll-m-16"
        >
            <div className="icon-div w-full max-w-[200px] flex items-center justify-center gap-2">
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
                <ShieldPlus className="w-12 h-12 text-[#1A2954]" />
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
            </div>
            <div className="relative flex flex-col items-center">
                <img
                    src={hexagonSvg}
                    alt="Hexagon Icon"
                    className="hidden md:inline-block md:absolute 
                    md:w-1/6 md:-right-4 md:-top-24"
                />
                <img
                    src={plusSvg}
                    alt="Hexagon Icon"
                    className="hidden md:inline-block md:absolute 
                    md:w-1/6 md:-left-6 md:-bottom-[25%]"
                />
                <h2 className="font-nyght font-medium text-xl md:text-2xl tracking-wider">
                    Our
                </h2>
                <h2 className="font-nyght font-medium text-3xl md:text-4xl tracking-wider -mt-3">
                    Mission
                </h2>
                <p className="font-medium mt-10 mb-2 md:text-center md:w-[75%] lg:w-1/2">
                    At Heritage Animal Hospital, our mission is simple yet
                    profound: to provide compassionate, high-quality veterinary
                    care that strengthens the bond between pets and their
                    families.
                </p>
                <p className="font-light mb-2 md:text-center md:w-[75%] lg:w-1/2">
                    We believe that every animal deserves exceptional medical
                    attention in a warm, welcoming environment. Guided by
                    professionalism and expertise, our team is dedicated to
                    ensuring the well-being of every patient, from routine
                    wellness visits to advanced medical care.
                </p>
                <p className="font-light md:text-center md:w-[75%] lg:w-1/2">
                    Through client education, state-of-the-art treatments, and a
                    commitment to personalized care, we strive to empower pet
                    owners and enhance the lives of the animals they love. Our
                    goal is to be more than a veterinary clinic — we aim to be a
                    trusted partner in your pet&apos;s lifelong health and
                    happiness.
                </p>
            </div>
        </div>
    )
})

Mission.displayName = 'Mission'
export default Mission
