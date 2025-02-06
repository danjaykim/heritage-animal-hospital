import emCat from '../../assets/images/em-cat.webp'
import emCat2 from '../../assets/images/kanashi-3dejnak626k-unsplash.jpg'
import emDog from '../../assets/images/jay-wennington-vXjNwYi2B8M-unsplash.jpg'

export default function UrgentCareMessage() {
    return (
        <section className="containers flex flex-col lg:flex-row lg:justify-between md:gap-8">
            <div className="h-[23rem] lg:w-1/2 relative">
                <img
                    src={emDog}
                    alt="Cat sitting"
                    className="md:hidden w-1/2 lg:w-1/2
                    rounded-xl object-cover lg:block
                    max-h-56 md:max-h-[300px] lg:max-h-[700px]
                    absolute top-28 right-6 z-10 lg:right-10 lg:top-16"
                />
                <img
                    src={emCat2}
                    alt="Cat sitting"
                    className="w-1/2 md:w-full lg:w-1/2
                    rounded-xl object-cover
                    max-h-56 md:max-h-[19rem] lg:max-h-[700px]
                    absolute left-6 md:left-0 lg:top-0"
                />
            </div>
            <div className="text-[#1A2954] lg:w-1/2">
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
