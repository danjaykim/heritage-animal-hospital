import { Link } from 'react-router-dom'
import avatarPlaceholder from '../../assets/images/avatar-placeholder.jpg'

export default function IntroVets() {
    return (
        <section className="p-8 lg:p-14 containers rounded-lg bg-[#19535F] text-[#F5F3EF]">
            <div className="flex flex-col md:flex-row lg:justify-around gap-10 mb-12 md:mb-16 lg:mb-20">
                <div className="lg:w-1/2 flex flex-col items-center">
                    <img
                        src={avatarPlaceholder}
                        alt="Vet image placeholder"
                        className="w-[25%] rounded-full mb-8"
                    />
                    <p className="lg:w-3/4 lg:text-center font-extralight">
                        Dr. Matthew Finney is a seasoned veterinarian
                        specializing in small animal care, as well as equine and
                        livestock medicine, offering professional and expert
                        care for animals of all sizes.
                    </p>
                </div>
                <div className="lg:w-1/2 flex flex-col items-center">
                    <img
                        src={avatarPlaceholder}
                        alt="Vet image placeholder"
                        className="w-[25%] rounded-full mb-8"
                    />
                    <p className="lg:w-3/4 lg:text-center font-extralight">
                        Dr. Sarah Kim brings expertise and compassion to her
                        practice, combining years of experience with a deep love
                        for animals to ensure the best possible care for your
                        pets.
                    </p>
                </div>
            </div>
            <div className="flex justify-center">
                <Link to="/" className="w-fit flex items-center gap-2 group">
                    <span>Read more about our team</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        className="transform duration-300 ease-in-out group-hover:translate-x-1"
                    >
                        <path
                            d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
                            strokeWidth="2"
                            stroke="currentColor"
                        />
                    </svg>
                </Link>
            </div>
        </section>
    )
}
