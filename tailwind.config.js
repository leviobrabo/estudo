/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  // chips usam classes dinâmicas por cor — garantir que não sejam removidas no build
  safelist: [
    {
      pattern:
        /(bg|text|border)-(slate|blue|green|yellow|pink|red|orange|purple|amber|stone|gray)-(50|100|200|300|400|500|600|700|800)/,
    },
  ],
  plugins: [],
}
