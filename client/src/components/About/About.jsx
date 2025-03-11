import Mission from './Mission'
import Team from './Team'
import aboutHeader from '../../assets/images/about-header.webp'

export default function About() {
    return (
        <section>
            <img
                src={aboutHeader}
                alt="Cat lying in the sun"
                className="w-full object-cover h-[20vh] md:h-[20vh] lg:h-[30vh]"
            />
            <div className="containers my-10 md:my-16 lg:my-20 text-[#1A2954]">
                <div className="font-dm text-4xl md:text-5xl flex flex-col justify-center items-center">
                    <h1>About Us</h1>
                    <div
                        className="w-[100px] md:w-[140px] h-[4px] md:h-[5px] 
                        bg-[#1A2954] mt-2 md:mt-4 lg:mt-6"
                    ></div>
                </div>
                <Team />
                <Mission />
            </div>
        </section>
    )
}
