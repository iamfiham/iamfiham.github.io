/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            boxShadow: {
                glow: "0px 0px 10px rgba(255,255,255)",
            },
        },
    },
    plugins: [],
};
