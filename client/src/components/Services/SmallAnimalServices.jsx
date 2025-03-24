export default function SmallAnimalServices() {
    return (
        <div
            id="our-team"
            className="py-4 flex flex-col items-center gap-2 scroll-m-24 md:scroll-m-32"
        >
            <div className="icon-div w-full max-w-[200px] flex items-center justify-center gap-2">
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
                <p>test</p>
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
            </div>
            <h2 className="font-nyght font-medium text-3xl md:text-4xl tracking-wider">
                Small Animal
            </h2>
            <p className="font-light mt-10 mb-12 md:text-center md:w-[75%] lg:w-1/2">
                We offer expert care tailored to the needs of small animals. Our
                services include wellness exams, vaccinations, diagnostics,
                surgical procedures, and emergency care, all provided with a
                gentle and caring approach. We are committed to keeping your pet
                healthy and thriving.
            </p>
        </div>
    )
}
