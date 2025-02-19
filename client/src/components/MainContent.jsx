import Hero from './Hero/Hero'
import CareOverview from './LandingContent/CareOverview'
import FacilityMessage from './LandingContent/FacilityMessage'
import CtaSection from './LandingContent/CtaSection'

export default function MainContent() {
    return (
        <>
            <Hero />
            <CareOverview />
            <FacilityMessage />
            <CtaSection />
        </>
    )
}
