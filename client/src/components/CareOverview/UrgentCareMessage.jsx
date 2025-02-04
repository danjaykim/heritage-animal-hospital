// import kittenSleeping from '../../assets/images/alexander-possingham-CeWNEEsHPbA-unsplash.jpg'
import emCat from '../../assets/images/em-cat.webp'

export default function UrgentCareMessage() {
    return (
        <section className="containers flex flex-col lg:flex-row md:gap-10">
            <img
                src={emCat}
                alt="Cat sitting"
                className="w-full lg:max-w-[500px] 
                mb-8 md:mb-0 object-cover lg:object-contain
                max-h-[400px] md:max-h-[300px] lg:max-h-[700px] rounded-xl"
            />
            <div className="text-[#1A2954] lg:w-1/2">
                <p className="font-dm text-4xl mb-4">
                    Emergency and Urgent Care Walk-ins Welcome
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
