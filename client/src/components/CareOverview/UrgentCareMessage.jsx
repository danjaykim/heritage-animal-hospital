import emCat2 from '../../assets/images/kanashi-3dejnak626k-unsplash.webp'
import emDog from '../../assets/images/jay-wennington-vXjNwYi2B8M-unsplash.webp'

export default function UrgentCareMessage() {
    return (
        <section className="containers flex flex-col md:flex-row lg:justify-between md:gap-8">
            <div className="h-[23rem] md:w-1/2 relative">
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
            <div className="text-[#1A2954] md:w-1/2">
                <p className="font-dm text-4xl lg:text-6xl mb-4">
                    Emergency and urgent care walk-ins welcome
                </p>
                <p className="font-extralight">
                    We understand that emergencies can happen at any time.
                    That's why we gladly welcome walk-ins for urgent care and
                    emergency services. Our dedicated team is here to provide
                    compassionate and prompt attention to your pet's needs,
                    ensuring they receive the best care possible, right when
                    they need it most.
                </p>
            </div>
        </section>
    )
}
