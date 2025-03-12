import emCat2 from '../../assets/images/kanashi-3dejnak626k-unsplash.webp'
import emDog from '../../assets/images/jay-wennington-vXjNwYi2B8M-unsplash.webp'

export default function UrgentCareMessage() {
    return (
        <section
            className="bg-[#F5F3EF] w-full pt-[3rem] md:pt-[5rem] 
            lg:pt-[6rem] xl:pt-[5rem] pb-[5rem] lg:pb-0 xl:pb-[8rem]"
        >
            <div
                className="containers flex flex-col 
                md:flex-row lg:justify-between md:gap-8"
            >
                <div
                    className="h-[23rem] md:min-h-[23rem] lg:min-h-[30rem] 
                    xl:min-h-[35rem] md:w-1/2 relative"
                >
                    <img
                        src={emDog}
                        alt="Golden Doodle posing"
                        className="w-1/2
                        rounded-xl object-cover
                        max-h-56 md:max-h-[23rem] lg:max-h-[520px]
                        absolute top-28 right-6 md:right-10 
                        md:top-16 lg:top-20 z-10"
                        loading="lazy"
                    />
                    <img
                        src={emCat2}
                        alt="Cat posing"
                        className="w-1/2
                        rounded-xl object-cover
                        max-h-56 md:max-h-[23rem] lg:max-h-[520px]
                        absolute left-6 md:left-0 lg:top-0"
                        loading="lazy"
                    />
                </div>
                <div
                    className="flex flex-col lg:justify-center 
                    gap-4 lg:gap-8 text-[#1A2954] md:w-1/2 lg:mb-32"
                >
                    <p className="font-nyght tracking-[0.02rem] text-4xl lg:text-5xl lg:w-[90%]">
                        Emergency and urgent care walk-ins welcome
                    </p>
                    <p className="font-extralight lg:w-[90%]">
                        We understand that emergencies can happen at any time.
                        That&apos;s why we gladly welcome walk-ins for urgent
                        care and emergency services. Our dedicated team is here
                        to provide compassionate and prompt attention to your
                        pet&apos;s needs, ensuring they receive the best care
                        possible, right when they need it most.
                    </p>
                    <a
                        href="tel:+123"
                        className="cursor-pointer group transition-all duration-200 
                        px-5 py-3 md:px-6 md:py-4 rounded-full
                        text-[#fff] bg-[#19535F] hover:bg-[#1E6C76] w-fit"
                    >
                        Call for Immediate Care
                    </a>
                </div>
            </div>
        </section>
    )
}
