import { useEffect, useRef } from 'react'
import { useLocation } from 'react-router-dom'
import Mission from './Mission'
import Team from './Team'
import aboutHeader from '../../assets/images/about-header.webp'

export default function About() {
    const teamRef = useRef(null)
    const missionRef = useRef(null)
    const { hash } = useLocation()

    useEffect(() => {
        if (hash === '#our-team' && teamRef.current) {
            teamRef.current.scrollIntoView({ behavior: 'smooth' })
        } else if (hash === '#our-mission' && missionRef.current) {
            missionRef.current.scrollIntoView({ behavior: 'smooth' })
        }
    }, [hash])

    return (
        <section>
            <div className="relative">
                <img
                    src={aboutHeader}
                    alt="Cat lying in the sun"
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
                            about us
                        </h1>
                    </div>
                </div>
            </div>
            <div className="containers my-10 md:my-16 lg:my-20 text-[#1A2954]">
                <Team ref={teamRef} />
                <Mission ref={missionRef} />
            </div>
        </section>
    )
}
