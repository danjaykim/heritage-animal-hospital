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
                nyght: ['Nyght Serif', 'sans-serif'],
                dm: ['DM Serif', 'sans-serif'],
                //
                bri: ['Bricolage Grotesque', 'sans-serif'],
                leggi: ['Leggibilmente', 'sans-serif'],
                re: ['Reddit Sans', 'sans-serif'],
                zain: ['Zain', 'sans-serif'],
                //
                jost: ['Jost', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
