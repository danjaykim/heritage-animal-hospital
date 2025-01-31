import { Link } from 'react-router-dom'

import dog from '../../assets/images/DoogieDoodle.png'
import smallAnimal from '../../assets/images/introservices-smallanimal.png'

import horse from '../../assets/images/horse.webp'
import cat from '../../assets/images/cat.webp'

export default function IntroServices() {
    return (
        <div className="flex flex-col md:flex-row gap-10 text-[#1A2954]">
            <div className="flex flex-col gap-5 md:w-1/2">
                <div className="flex md:justify-center">
                    <img
                        src={cat}
                        alt="Vet and cat illustration"
                        className="w-1/2"
                    />
                </div>
                <p className="font-light leading-6">
                    Our animal hospital provides expert care for small animals,
                    including routine exams, vaccinations, dental care, and
                    surgical procedures. We focus on personalized treatment to
                    ensure the health and well-being of your pets at every stage
                    of life.
                </p>
                <Link
                    to="/services#small-animal"
                    className="w-fit flex items-center gap-1 -mt-2 group"
                >
                    <span>Small Animal Services</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        className="mb-[.05rem] transform duration-300 ease-in-out group-hover:translate-x-1"
                    >
                        <path
                            d="M7.293 4.707 14.586 12l-7.293 7.293 1.414 1.414L17.414 12 8.707 3.293 7.293 4.707z"
                            strokeWidth="2"
                            stroke="currentColor"
                        />
                    </svg>
                </Link>
            </div>
            <div className="flex flex-col gap-5 md:w-1/2">
                <div className="flex md:justify-center">
                    <img
                        src={horse}
                        alt="Horse and vet illustration"
                        className="w-1/2"
                    />
                </div>
                <p className="font-light leading-6">
                    We offer specialized care for equine and livestock animals,
                    including emergency treatment, preventative care, and
                    reproductive health management. Our team is equipped to
                    handle both routine and complex needs, with farm calls
                    available for on-site services.
                </p>
                <Link
                    to="/services#equine-livestock"
                    className="w-fit flex items-center gap-1 -mt-2 group"
                >
                    <span>Equine and Livestock Services</span>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="12"
                        height="12"
                        viewBox="0 0 24 24"
                        className="mb-[.05rem] transform duration-300 ease-in-out group-hover:translate-x-1"
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
