import { forwardRef } from 'react'
import HeartPulse from '../../assets/images/svg/heart-pulse.svg?react'
import placeHolder from '../../assets/images/avatar-placeholder.jpg'

const Team = forwardRef((props, ref) => {
    return (
        <div
            ref={ref}
            id="our-team"
            className="py-4 flex flex-col items-center gap-2 scroll-m-24 md:scroll-m-32"
        >
            <div className="icon-div w-full max-w-[200px] flex items-center justify-center gap-2">
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
                <HeartPulse className="w-12 h-12 text-[#1A2954]" />
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
            </div>
            <h2 className="font-nyght text-xl md:text-2xl lg:text-6xl">
                Our Team
            </h2>
            {/* <h2 className="font-nyght font-medium text-3xl md:text-4xl tracking-wider -mt-3">
                Team
            </h2> */}
            <p className="font-light mt-10 mb-12 md:text-center md:w-[75%] lg:w-1/2">
                Our doctors are dedicated to providing the highest level of care
                for your pets. Passionate for animal health, they work together
                to ensure your pet receives personalized, attentive treatment
                every visit.
            </p>
            <div className="flex flex-col gap-10 md:gap-6 md:flex-row">
                <div
                    className="flex flex-col lg:items-center gap-3 md:gap-4 
                    rounded p-4 md:p-6 lg:p-8 border-[1px] border-[#F0F2F2] bg-[#FAFCFE]"
                >
                    <img
                        src={placeHolder}
                        alt="Vet image placeholder"
                        className="lg:w-1/2 mb-4"
                    />
                    <h3 className="font-nyght text-3xl">Dr. Matthew Finney</h3>
                    <p className="font-nyght font-bold text-xl tracking-widest">
                        DVM
                    </p>
                    <p className="font-light">
                        Dr. Matthew Finney brings a wealth of experience and
                        expertise to our team, specializing in both small
                        animals and large animals, including equine and
                        livestock. With a passion for animal care that spans
                        multiple disciplines, Dr. Finney is dedicated to
                        providing comprehensive, compassionate treatment to pets
                        of all sizes. Whether it&apos;s a beloved dog, a horse,
                        or a farm animal, Dr. Matthew Finney&apos;s skill set
                        allows him to tailor care to the unique needs of each
                        animal, ensuring their health and well-being.
                    </p>
                </div>
                <div
                    className="flex flex-col lg:items-center gap-3 md:gap-4 
                    rounded p-4 md:p-6 lg:p-8 border-[1px] border-[#F0F2F2] bg-[#FAFCFE]"
                >
                    <img
                        src={placeHolder}
                        alt="Vet image placeholder"
                        className="lg:w-1/2 mb-4"
                    />
                    <h3 className="font-nyght text-3xl">
                        Dr. Sarah Kim Finney
                    </h3>
                    <p className="font-nyght font-bold text-xl tracking-widest">
                        DVM
                    </p>
                    <p className="font-light">
                        Dr. Sarah Kim Finney is a compassionate and skilled
                        veterinarian specializing in small animal care. Her
                        dedication to providing high-quality, individualized
                        treatment to cats, dogs, and other small pets makes her
                        a trusted part of our team. Dr. Sarah Kim Finney&apos;s
                        approach combines her expertise in veterinary medicine
                        with a deep love for animals, ensuring that each patient
                        receives the best care possible. Her focus is always on
                        creating a comfortable and positive experience for both
                        pets and their owners.
                    </p>
                </div>
            </div>
        </div>
    )
})

Team.displayName = 'Team'
export default Team
