import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
                extend: {
                    colors: {
                        yareh: {
                            blue: '#1e40af', // Requested Blue
                            darkBlue: '#172554',
                            green: '#059669', // Requested Green
                            lightGreen: '#ecfdf5',
                            gold: '#d97706',
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
                        serif: ['Merriweather', 'Georgia', 'serif'],
                    },
                    backgroundImage: {
                        'hero-pattern': "none",
                        'spice-pattern': "none",
                    }
                }
            },
  plugins: [],
};
export default config;
