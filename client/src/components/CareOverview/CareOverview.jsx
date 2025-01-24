import RotatingServices from './RotatingServices'
import IntroMessage from './IntroMessage'
import IntroServices from './IntroServices'

export default function CareOverview() {
    return (
        <>
            <section className="care-overview containers flex flex-col gap-20 lg:gap-28 justify-center items-center my-8 lg:my-24">
                <RotatingServices />
                <IntroMessage />
                <IntroServices />
            </section>
        </>
    )
}
