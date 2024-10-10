/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                poppins: ["Poppins", "sans-serif"],
                rubik: ["Rubik", "Arial"]
            },
            backgroundImage: theme => ({
                "gradient-to-135": "linear-gradient(135deg, #DA0037, #f97316)"
            })
        }
    },
    plugins: []
};
