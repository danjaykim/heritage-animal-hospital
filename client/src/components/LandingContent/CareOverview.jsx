import RotatingServices from './RotatingServices'
import IntroMessage from './IntroMessage'
import IntroServices from './IntroServices'
import IntroVets from './IntroVets'
import UrgentCareMessage from './UrgentCareMessage'

export default function CareOverview() {
    return (
        <div className="care-overview flex flex-col gap-12 lg:gap-20 justify-center items-center mt-8 lg:mt-20 mb-0">
            <IntroMessage />
            <IntroVets />
            <RotatingServices />
            <IntroServices />
            <UrgentCareMessage />
        </div>
    )
}
