import wagonPups from '../../assets/images/wagon-pups.webp'
import SmallAnimalServices from './SmallAnimalServices'

export default function About() {
    return (
        <section>
            <div className="relative">
                <img
                    src={wagonPups}
                    alt="Puppies in a wagon"
                    className="w-full object-cover h-[20vh] lg:h-[30vh]"
                />
                <div className="absolute bottom-[-10%] w-full">
                    <div className="containers flex justify-end">
                        <h1
                            className="px-3 pt-[.45rem] pb-[1.15rem] 
                            md:px-5 md:pt-[.85rem] md:pb-[1.5rem] 
                            lg:px-8 lg:pt-3 lg:pb-[2rem]             
                            font-nyght font-bold tracking-wider text-[#1A2954]
                            text-3xl md:text-[2.5rem] lg:text-5xl
                            bg-white rounded-t-2xl"
                        >
                            services
                        </h1>
                    </div>
                </div>
            </div>
            <div className="containers my-10 md:my-16 lg:my-20 text-[#1A2954] border-4">
                <SmallAnimalServices />
            </div>
        </section>
    )
}
