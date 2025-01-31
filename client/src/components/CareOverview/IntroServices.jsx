import { Link } from 'react-router-dom'

import dog from '../../assets/images/DoogieDoodle.png'
import smallAnimal from '../../assets/images/introservices-smallanimal.png'

import horse from '../../assets/images/horse.webp'
import cat from '../../assets/images/cat.webp'

export default function IntroServices() {
    return (
        <div className="flex flex-col md:flex-row gap-14 text-[#1A2954]">
            <div className="flex flex-col flex-1 gap-5 lg:items-center md:w-1/2">
                <div className="flex md:justify-center">
                    <img
                        src={cat}
                        alt="Vet and cat illustration"
                        className="w-2/5 md:w-1/3"
                    />
                </div>
                <p className="flex-1 font-light leading-6 lg:text-center lg:w-3/4">
                    Our animal hospital provides expert care for small animals,
                    including routine exams, vaccinations, dental care, and
                    surgical procedures. We focus on personalized treatment to
                    ensure the health and well-being of your pets at every stage
                    of life.
                </p>
                <Link
                    to="/services#small-animal"
                    className="w-fit flex items-center gap-2 group"
                >
                    <span>Small Animal Services</span>
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
            <div className="flex flex-col flex-1 gap-5 lg:items-center md:w-1/2">
                <div className="flex md:justify-center">
                    <img
                        src={horse}
                        alt="Horse and vet illustration"
                        className="w-2/5 md:w-1/3"
                    />
                </div>
                <p className="flex-1 font-light leading-6 lg:text-center lg:w-3/4">
                    We offer specialized care for equine and livestock animals,
                    including emergency treatment, preventative care, and
                    reproductive health management. Our team is equipped to
                    handle both routine and complex needs for your animals.
                </p>
                <Link
                    to="/services#equine-livestock"
                    className="w-fit flex items-center gap-2 group"
                >
                    <span>Equine and Livestock Services</span>
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
        </div>
    )
}
