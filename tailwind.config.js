/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./src/**/*.{js,jsx,ts,tsx}",
        "./public/index.html"
    ],
    theme: {
        extend: {
            fontFamily: {
                sans: ['Inter', 'system-ui', 'sans-serif'],
                serif: ['Fraunces', 'Georgia', 'serif'],
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            colors: {
                background: 'hsl(var(--background))',
                surface: 'hsl(var(--surface))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))',
                    hover: 'hsl(var(--primary-hover))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))',
                    soft: 'hsl(var(--accent-soft))'
                },
                gold: {
                    DEFAULT: 'hsl(var(--gold))',
                    deep: 'hsl(var(--gold-deep))',
                    light: 'hsl(var(--gold-light))'
                },
                navy: {
                    DEFAULT: 'hsl(var(--navy))',
                    deep: 'hsl(var(--navy-deep))',
                    soft: 'hsl(var(--navy-soft))'
                },
                silver: 'hsl(var(--silver))',
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                success: {
                    DEFAULT: 'hsl(var(--success))',
                    foreground: 'hsl(var(--success-foreground))'
                },
                border: 'hsl(var(--border))',
                'border-strong': 'hsl(var(--border-strong))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                }
            },
            boxShadow: {
                'xs-soft': 'var(--shadow-xs)',
                'soft': 'var(--shadow-sm)',
                'elevated': 'var(--shadow-md)',
                'elegant': 'var(--shadow-lg)',
                'premium': 'var(--shadow-xl)',
                'gold': 'var(--shadow-gold)'
            },
            backgroundImage: {
                'gradient-navy': 'var(--gradient-navy)',
                'gradient-navy-soft': 'var(--gradient-navy-soft)',
                'gradient-gold': 'var(--gradient-gold)',
                'gradient-ivory': 'var(--gradient-ivory)',
                'gradient-hero-overlay': 'var(--gradient-hero-overlay)',
            },
            keyframes: {
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                },
                'fade-up': {
                    '0%': { opacity: '0', transform: 'translateY(24px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' }
                },
                'fade-in': {
                    '0%': { opacity: '0' },
                    '100%': { opacity: '1' }
                },
                'shimmer': {
                    '0%': { backgroundPosition: '-200% 0' },
                    '100%': { backgroundPosition: '200% 0' }
                },
                'marquee': {
                    '0%': { transform: 'translateX(0)' },
                    '100%': { transform: 'translateX(-50%)' }
                }
            },
            animation: {
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out',
                'fade-up': 'fade-up 0.7s cubic-bezier(0.22, 1, 0.36, 1) both',
                'fade-in': 'fade-in 0.6s ease-out both',
                'shimmer': 'shimmer 3s linear infinite',
                'marquee': 'marquee 40s linear infinite'
            }
        }
    },
    plugins: [require("tailwindcss-animate")],
};
