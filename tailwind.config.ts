import type {Config} from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        fontFamily: {
            primary: "var(--font-jetbrains-mono)",
        },
        extend: {
            colors: {
                primary: '#1c1c22',
                accent: {
                    DEFAULT: '#00FF99',
                    hover: '#00e1187'
                }
            },

        }
    },
    plugins: [require("tailwindcss-animate")],
} satisfies Config;
