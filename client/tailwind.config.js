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
            fontFamily: {
                default: ['Default', 'sans-serif'],
                champie: ['Champie', 'sans-serif'],
                jost: ['Jost', 'sans-serif'],
                cal: ['Cal Sans', 'sans-serif'],
                gilland: ['Gilland', 'sans-serif'],
                kastore: ['Kastore', 'sans-serif'],
                nohemi: ['Nohemi', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
