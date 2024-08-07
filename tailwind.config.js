/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                glow: "0px 0px 20px rgba(255,255,255)",
            },
            fontFamily: {
                lato: "'Lato', sans-serif",
                opensans: "'Open Sans', sans-serif",
            },
            dropShadow: {
                cursor: "0px 0px 20px  rgba(0,0,0,1)",
            },
        },
    },
    plugins: [],
};
