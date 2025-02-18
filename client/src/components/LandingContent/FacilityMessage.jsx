import emCat2 from '../../assets/images/kanashi-3dejnak626k-unsplash.webp'
import emDog from '../../assets/images/jay-wennington-vXjNwYi2B8M-unsplash.webp'

export default function FacilityMessage() {
    return (
        <section className="bg-[#F5F3EF] w-full pb-[1rem] md:pb-[4rem] lg:-pb-4 xl:pb-[6rem]">
            <div className="containers flex flex-col md:flex-row lg:justify-between md:gap-8">
                <div className="flex flex-col lg:justify-center gap-4 lg:gap-8 text-[#1A2954] md:w-1/2 lg:mb-32">
                    <p className="font-dm text-4xl lg:text-5xl lg:w-[90%]">
                        Our Facility
                    </p>
                    <p className="font-extralight lg:w-[90%]">
                        At our new facility, we are committed to providing a
                        state-of-the-art environment designed with your pet’s
                        health and comfort in mind. Equipped with the latest
                        technology, we ensure that your pets receive the highest
                        quality care in a modern, welcoming space. We’re excited
                        to serve your pets in our new, cutting-edge facility!
                    </p>
                </div>
                <div className="h-[23rem] md:min-h-[23rem] lg:min-h-[30rem] xl:min-h-[35rem] md:w-1/2 relative mt-10 md:mt-0">
                    <img
                        src={emDog}
                        alt="Golden Doodle posing"
                        className="w-1/2
                    rounded-xl object-cover
                    max-h-56 md:max-h-[23rem] lg:max-h-[520px]
                    absolute top-28 right-6 md:right-10 md:top-16 lg:top-20 z-10"
                    />
                    <img
                        src={emCat2}
                        alt="Cat posing"
                        className="w-1/2
                    rounded-xl object-cover
                    max-h-56 md:max-h-[23rem] lg:max-h-[520px]
                    absolute left-6 md:left-0 lg:top-0"
                    />
                </div>
            </div>
        </section>
    )
}
