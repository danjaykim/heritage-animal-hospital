import { Link } from 'react-router-dom'

export default function HeroButton({ children, to }) {
    return (
        <Link
            to={to}
            className="cursor-pointer group transition-all duration-200 
            px-5 py-3 md:px-6 md:py-4 rounded-full font-medium text-sm md:text-base
            md:tracking-tight text-[#fff] bg-[#19535F] backdrop-blur-sm w-fit"
        >
            {children}
        </Link>
    )
}
