import { Link } from 'react-router-dom'

export default function CtaButton({ children, to, className }) {
    return (
        <Link
            to={to}
            className={`cursor-pointer group transition-all duration-200 
            px-5 py-3 md:px-5 md:py-3 rounded-full
            text-[#fff] bg-[#19535F] hover:bg-[#1E6C76] w-fit ${className}`}
        >
            {children}
        </Link>
    )
}
