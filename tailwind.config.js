/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          background: 'var(--color-background)',
          surface: 'var(--color-surface)',
          'surface-elevated': 'var(--color-surface-elevated)',
          border: 'var(--color-border)',
          'border-hover': 'var(--color-border-hover)',
          'text-primary': 'var(--color-text-primary)',
          'text-secondary': 'var(--color-text-secondary)',
          'text-muted': 'var(--color-text-muted)',
          accent: 'var(--color-accent)',
          'accent-hover': 'var(--color-accent-hover)',
          'accent-subtle': 'var(--color-accent-subtle)',
        },
      },
    },
  },
  plugins: [],
  darkMode: 'class',
}
