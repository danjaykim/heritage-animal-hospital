import Mission from './Mission'
import Team from './Team'
import aboutHeader from '../../assets/images/about-header.webp'

export default function About() {
    return (
        <section>
            <img
                src={aboutHeader}
                alt="Dogs playfully running"
                className="w-full object-cover h-[20vh] md:h-[25vh] lg:h-[30vh]"
            />
            <div className="containers my-8">
                <div className="font-dm text-5xl text-[#1A2954] flex justify-center">
                    <h1>About Us</h1>
                </div>
                <Team />
                <Mission />
            </div>
        </section>
    )
}
