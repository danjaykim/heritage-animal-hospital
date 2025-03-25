export default function ServiceSection({
    secIcon,
    title,
    description,
    services,
}) {
    return (
        <div className="py-4 flex flex-col items-center gap-2 scroll-m-24 md:scroll-m-32">
            <div className="icon-div w-full max-w-[200px] flex items-center justify-center gap-2">
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
                {secIcon}
                <div className="line flex-grow h-[2px] bg-[#6A7AA4]" />
            </div>
            <h2 className="font-nyght font-medium text-3xl md:text-4xl tracking-wider">
                {title}
            </h2>
            <p className="font-light mt-10 mb-24 md:text-center md:w-[75%] lg:w-1/2">
                {description}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-20">
                {services.map((service, index) => {
                    return (
                        <div
                            key={index}
                            className="relative flex flex-col items-center justify-center 
                            gap-3 md:gap-6 px-4 pt-24 pb-10 border-[1px] border-[#D1D9E6]
                            bg-[#FAFCFE] rounded-md"
                        >
                            <div
                                className="absolute -top-10 rounded-full p-4 
                                border-[1px] border-[#D1D9E6] bg-[#F5F3EF]"
                            >
                                <img
                                    src={service.icon}
                                    alt=""
                                    className="w-[75px]"
                                />
                            </div>
                            <p className="font-nyght font-medium text-xl text-center">
                                {service.title}
                            </p>
                            <p className="text-center font-light">
                                {service.description}
                            </p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}
