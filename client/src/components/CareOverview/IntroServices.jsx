import { Link } from 'react-router-dom'
import catDog from '../../assets/images/andrew-s-ouo1hbizWwo-unsplash.webp'
import horses from '../../assets/images/omar-prestwich-mS26pmEiVVA-unsplash.webp'

export default function IntroServices() {
    return (
        <div className="flex flex-col items-center gap-5 md:gap-8 text-[#1A2954]">
            <div className="flex flex-col gap-5">
                <img
                    src={catDog}
                    alt="Cat and puppy in a field"
                    className="rounded"
                />
                <p className="text-[1.3rem] font-light leading-7">
                    Our animal hospital provides expert care for small animals,
                    including routine exams, vaccinations, dental care, and
                    surgical procedures. We focus on personalized treatment to
                    ensure the health and well-being of your pets at every stage
                    of life.
                </p>
                <Link to="/services#small-animal">Small Animal Services</Link>
            </div>
            <div className="flex flex-col gap-5">
                <img src={horses} alt="Horses" className="rounded" />
                <p className="text-[1.3rem] font-light leading-7">
                    We offer specialized care for equine and livestock animals,
                    including emergency treatment, preventative care, and
                    reproductive health management. Our team is equipped to
                    handle both routine and complex needs, with farm calls
                    available for on-site services.
                </p>
                <Link to="/services#small-animal">
                    Equine and Livestock Services
                </Link>
            </div>
        </div>
    )
}
