import RotatingServices from './RotatingServices'
import IntroMessage from './IntroMessage'
import IntroServices from './IntroServices'
import UrgentCareMessage from './UrgentCareMessage'

export default function CareOverview() {
    return (
        <div className="care-overview flex flex-col gap-20 lg:gap-28 justify-center items-center my-8 lg:my-24">
            <IntroMessage />
            <RotatingServices />
            <IntroServices />
            <UrgentCareMessage />
        </div>
    )
}
