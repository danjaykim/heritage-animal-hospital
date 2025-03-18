import { forwardRef } from 'react'
import ShieldPlus from '../../assets/images/svg/shield-plus.svg?react'

const Mission = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            id="our-mission"
            className="border-4 mt-14 lg:mt-20 py-12 md:py-16 lg:py-20 
            flex flex-col items-center gap-2 scroll-m-16"
        >
            <div className="icon-div w-full max-w-[650px] flex items-center justify-center gap-2">
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
                <ShieldPlus className="w-12 h-12 text-[#1A2954]" />
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
            </div>
            <h2 className="font-nyght font-medium text-xl md:text-2xl tracking-wider">
                Our Mission
            </h2>
            <p className="font-medium mt-4 mb-2 md:text-center md:w-[75%] lg:w-1/2">
                At Heritage Animal Hospital, our mission is simple yet profound:
                to provide compassionate, high-quality veterinary care that
                strengthens the bond between pets and their families.
            </p>
            <p className="font-light mb-2 md:text-center md:w-[75%] lg:w-1/2">
                We believe that every animal deserves exceptional medical
                attention in a warm, welcoming environment. Guided by
                professionalism and expertise, our team is dedicated to ensuring
                the well-being of every patient, from routine wellness visits to
                advanced medical care.
            </p>
            <p className="font-light md:text-center md:w-[75%] lg:w-1/2">
                Through client education, state-of-the-art treatments, and a
                commitment to personalized care, we strive to empower pet owners
                and enhance the lives of the animals they love. Our goal is to
                be more than a veterinary clinic — we aim to be a trusted
                partner in your pet&apos;s lifelong health and happiness.
            </p>
        </div>
    )
})

Mission.displayName = 'Mission'
export default Mission
