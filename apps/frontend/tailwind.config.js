/** @type {import('tailwindcss').Config} */
module.exports = {
  // Menentukan file mana saja yang akan dipindai untuk class Tailwind
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // Jika kamu menggunakan folder src, tambahkan:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Di sini kita mendaftarkan warna kustom agar sesuai dengan desain Wo-Fi
      colors: {
        wofiOrange: '#FF5C00',
        wofiYellow: '#FFF490',
        wofiGreen: '#D1F5D3',
        wofiPurple: '#E7D1FF',
        wofiBlue: '#BEEBFF',
        wofiPeach: '#FFD1B9',
        wofiBlack: '#1A1A1A',
        wofiBg: '#FCFBF7',
      },
      // Opsional: Menambahkan konfigurasi font jika kamu ingin lebih presisi
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        serif: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [],
}