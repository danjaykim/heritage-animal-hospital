export default function IntroMessage() {
    return (
        <section className="containers flex flex-col items-center gap-5 text-[#1A2954]">
            <h2
                className="font-nyght font-medium tracking-wide self-start md:self-center 
                text-[2.1rem] md:text-[2.7rem] lg:text-[2.7rem] 
                leading-none md:leading-[2.5rem] lg:leading-[3rem]"
            >
                Compassionate care
                <span className="hidden lg:inline">
                    &nbsp;for your beloved pets
                </span>
                <div className="lg:hidden">for your beloved pets</div>
            </h2>
            <p className="font-light tracking-wide leading-6 md:w-3/4 lg:w-full md:text-center">
                At Heritage Animal Hospital, we treat your pets like family,
                providing compassionate care and
                <span className="lg:hidden">
                    &nbsp;expert treatment in a comfortable, welcoming
                    environment.
                </span>
                <span className="hidden lg:block">
                    expert treatment in a comfortable, welcoming environment.
                    See our veterinarians below.
                </span>
            </p>
        </section>
    )
}
