/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                accent: '#ed9cc1',
                accentDark: '#e15a97',
            },
            container: {
                center: true,
                padding: '15px',
            },
            fontFamily: {
                garamond: ['Garamond', 'serif'],
                nunito: ['Nunito', 'sans-serif'],
                opensans: ['Open-Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
};
