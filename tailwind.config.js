/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'sans-serif'],
            },
            colors: {
                'brand-black': '#000000',
                'brand-white': '#FFFFFF',
            },
            letterSpacing: {
                'widest-plus': '0.2em',
            }
        },
    },
    plugins: [],
}
