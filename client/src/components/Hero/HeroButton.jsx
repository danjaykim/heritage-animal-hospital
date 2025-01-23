import { Link } from 'react-router-dom'

export default function HeroButton({ children, to, className }) {
    return (
        <Link
            to={to}
            className={`cursor-pointer group transition-all duration-200 
            px-5 py-3 md:px-6 md:py-4 rounded-full font-medium text-lg md:text-xl
            text-[#fff] bg-[#19535F] hover:bg-[#1E6C76] w-fit ${className}`}
        >
            {children}
        </Link>
    )
}
