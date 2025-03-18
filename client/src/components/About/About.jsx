import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Mission from './Mission'
import Team from './Team'
import aboutHeader from '../../assets/images/about-header.webp'

export default function About() {
    const teamRef = useRef(null)
    // const missionRef = useRef(null)
    const { hash } = useLocation()

    useEffect(() => {
        if (hash === '#our-team' && teamRef.current) {
            teamRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [hash])

    return (
        <section>
            <img
                src={aboutHeader}
                alt="Cat lying in the sun"
                className="w-full object-cover h-[20vh] md:h-[20vh] lg:h-[30vh]"
            />
            <div className="containers my-10 md:my-16 lg:my-20 text-[#1A2954]">
                <div className="font-nyght font-medium tracking-wider text-4xl md:text-5xl flex flex-col justify-center items-center">
                    <h1>about us</h1>
                    <div
                        className="w-[100px] md:w-[140px] h-[2px] 
                        bg-[#1A2954] mt-2 md:mt-4 lg:mt-6"
                    ></div>
                </div>
                <Team ref={teamRef} />
                <Mission />
            </div>
        </section>
    )
}
