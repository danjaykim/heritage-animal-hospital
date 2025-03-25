import ServiceSection from './ServiceSection'
import HousePlus from '../../assets/images/svg/house-plus.svg?react'
import { largeAnimalServices } from './LargeAnimalServicesData'

export default function LargeAnimalServices() {
    return (
        <ServiceSection
            icon={<HousePlus className="w-12 h-12" />}
            title="Equine and Livestock"
            description="Test"
            services={largeAnimalServices}
        />
    )
}
