import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                'portland': '#F5F5F0',
                'midnight': '#0F1115',
                'bronze': '#9A8C74',
                'bronze-dark': '#5c5240',
                'surface': '#1A1D23',
                'surface-light': '#252932',
            },
            fontFamily: {
                'serif': ['Cinzel', 'serif'],
                'sans': ['Inter', 'sans-serif'],
            },
            backgroundImage: {
                'blueprint': "linear-gradient(#9A8C74 1px, transparent 1px), linear-gradient(90deg, #9A8C74 1px, transparent 1px)"
            }
        },
    },
    plugins: [],
};
export default config;
