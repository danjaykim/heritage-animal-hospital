import HeartPulse from '../../assets/images/svg/heart-pulse.svg?react'

export default function Team() {
    return (
        <div className="py-12 md:py-16 lg:py-20 flex flex-col items-center gap-2">
            <HeartPulse className="w-12 h-12 text-[#1A2954]" />
            <h2 className="font-zain font-extrabold text-xl md:text-2xl tracking-wider">
                OUR TEAM
            </h2>
            <p className="font-light mt-4 md:text-center md:w-[75%] lg:w-1/2">
                Our doctors are dedicated to providing the highest level of care
                for your pets. Passionate for animal health, they work together
                to ensure your pet receives personalized, attentive treatment
                every visit.
            </p>
        </div>
    )
}
