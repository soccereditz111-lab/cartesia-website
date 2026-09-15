import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: {
          yellow: '#FFD600',
          orange: '#FF8A00',
          red: '#FF2D00',
        }
      },
      backgroundImage: {
        'accent-gradient': 'linear-gradient(90deg, #FFD600 0%, #FF8A00 50%, #FF2D00 100%)',
        'accent-gradient-vertical': 'linear-gradient(180deg, #FFD600 0%, #FF8A00 50%, #FF2D00 100%)',
      }
    },
  },
  plugins: [],
}
export default config