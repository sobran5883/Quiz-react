/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundColor: {
        'success': '#28a745',
        'danger': '#dc3545',
      },
      textColor: {
        'success': '#28a745',
        'danger': '#dc3545',
      },
    },
  },
  plugins: [],
}