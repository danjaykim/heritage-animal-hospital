/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        extend: {
            fontSize: {
                base: '16px',
            },
            fontFamily: {
                cal: ['Cal Sans', 'sans-serif'],
                jost: ['Jost', 'sans-serif'],
                zain: ['Zain', 'sans-serif'],
                dm: ['DM Serif', 'sans-serif'],
                // excon: ['Excon', 'sans-serif'],
                hind: ['Hind', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
