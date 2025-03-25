import ServiceSection from './ServiceSection'
import { smallAnimalServices } from './SmallAnimalServicesData'
import Bone from '../../assets/images/svg/bone.svg?react'

export default function SmallAnimalServices() {
    return (
        <ServiceSection
            secIcon={<Bone className="w-12 h-12 text-[#1A2954]" />}
            title="Small Animal"
            description="We offer expert care tailored to the needs of small animals. Our services 
            include wellness exams, vaccinations, diagnostics, surgical procedures, and emergency 
            care, all provided with a gentle and caring approach. We are committed to keeping your 
            pet healthy and thriving."
            services={smallAnimalServices}
        />
    )
}
