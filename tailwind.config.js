/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            screens: {
                'desk': '1110px', // новый кастомный брейкпоинт
            },
            fontFamily: {
                actay: ["Actay", "sans-serif"],
            },
        },
    },
    plugins: [],
}
