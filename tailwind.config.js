/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          500: 'var(--c-primary-500)',
          600: 'var(--c-primary-600)',
          100: 'var(--c-primary-100)',
        },
        surface: {
          base: 'var(--c-surface-base)',
          subtle: 'var(--c-surface-subtle)',
          elevated: 'var(--c-surface-elevated)',
          overlay: 'var(--c-surface-overlay)',
        },
        neutral: {
          900: 'var(--c-neutral-900)',
          700: 'var(--c-neutral-700)',
          500: 'var(--c-neutral-500)',
          300: 'var(--c-neutral-300)',
          200: 'var(--c-neutral-200)',
          100: 'var(--c-neutral-100)',
          50: 'var(--c-neutral-50)',
        },
        error: {
          500: 'var(--c-error-500)',
        },
        success: {
          500: 'var(--c-success-500)',
        },
        warning: {
          500: 'var(--c-warning-500)',
        },
        ai: {
          base: 'var(--c-ai-base)',
          processing: 'var(--c-ai-state-processing)',
          result: 'var(--c-ai-state-result)',
          alert: 'var(--c-ai-state-alert)',
        },
      },
      borderRadius: {
        'sm': 'var(--radius-sm)',
        'md': 'var(--radius-md)',
        'lg': 'var(--radius-lg)',
        'xl': 'var(--radius-xl)',
        'full': 'var(--radius-full)',
      },
      transitionDuration: {
        'fast': 'var(--motion-fast)',
        'base': 'var(--motion-base)',
        'slow': 'var(--motion-slow)',
      },
      spacing: {
        '1': '4px',
        '2': '8px',
        '3': '12px',
        '4': '16px',
        '5': '24px',
        '6': '32px',
        '7': '48px',
        '8': '64px',
      },
    },
  },
  plugins: [],
}
