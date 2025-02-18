import { Link } from 'react-router-dom'

export default function IntroVets() {
    return (
        <section className="border-4 p-4 lg:p-8 containers rounded-lg bg-[#F5F3EF]">
            <div className="flex flex-col md:flex-row gap-4 lg:gap-8 mb-4 md:mb-8">
                <div>
                    <p className="mb-2 lg:mb-4">IMAGE PLACEHOLDER</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam nostrum veniam voluptatum quidem et ab
                        consequuntur, nam ex qui deleniti beatae eius reiciendis
                        commodi.
                    </p>
                </div>
                <div>
                    <p className="mb-2">IMAGE PLACEHOLDER</p>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Magnam nostrum veniam voluptatum quidem et ab
                        consequuntur, nam ex qui deleniti beatae eius reiciendis
                        commodi.
                    </p>
                </div>
            </div>
            <div className="md:flex md:justify-center">
                <Link to="/">Read more about our team</Link>
            </div>
        </section>
    )
}
