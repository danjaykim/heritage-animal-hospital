import CtaButton from '../Hero/CtaButton'

export default function CtaSection() {
    return (
        <section className="py-14 md:py-24 lg:py-28">
            <div className="containers flex flex-col items-center">
                <h3
                    className="font-nyght font-medium text-[#1A2954] text-center 
                    text-[1.8rem] md:text-[2.3rem] lg:text-[3rem] 
                    leading-[2.2rem] md:leading-[2.8rem] 
                    lg:leading-[3.5rem] mb-7 md:mb-8 lg:mb-12"
                >
                    We&apos;re Here to Help - Reach Out for
                    <span className="inline md:hidden">
                        &nbsp;Professional Pet Care
                    </span>
                    <span className="hidden md:block">
                        Professional Pet Care
                    </span>
                </h3>
                <div className="flex flex-col md:flex-row items-center gap-3 md:gap-5">
                    <CtaButton
                        to="/"
                        className="w-[200px] lg:w-[220px] text-[.85rem] lg:text-[.9rem] 
                        tracking-wide text-center 
                        px-6 py-4 md:px-6 md:py-5 lg:px-6 lg:py-6"
                    >
                        Book an Appointment
                    </CtaButton>
                    <a
                        href="tel:+123"
                        className="w-[200px] lg:w-[220px] text-[.85rem] lg:text-[.9rem] 
                        tracking-wide cursor-pointer group transition-all duration-200 
                        px-6 py-4 md:px-6 md:py-5 lg:px-6 lg:py-6 rounded-full text-center
                        text-[#fff] bg-[#19535F] hover:bg-[#1E6C76]"
                    >
                        Call Us (123)123-1234
                    </a>
                </div>
            </div>
        </section>
    )
}
