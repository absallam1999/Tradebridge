/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "1rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
    },
    extend: {
      colors: {
        // Primary brand colors
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          400: "#60a5fa",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
          800: "#1e40af",
          900: "#1e3a8a",
          DEFAULT: "#3b82f6",
        },
        // Secondary brand colors
        secondary: {
          50: "#f0f9ff",
          100: "#e0f2fe",
          200: "#bae6fd",
          300: "#7dd3fc",
          400: "#38bdf8",
          500: "#0ea5e9",
          600: "#0284c7",
          700: "#0369a1",
          800: "#075985",
          900: "#0c4a6e",
          950: "#082f49",
          DEFAULT: "#0ea5e9",
        },
        // Success, warning, error colors
        success: {
          50: "#f0fdf4",
          100: "#dcfce7",
          200: "#bbf7d0",
          300: "#86efac",
          400: "#4ade80",
          500: "#22c55e",
          600: "#16a34a",
          700: "#15803d",
          800: "#166534",
          900: "#14532d",
          DEFAULT: "#22c55e",
        },
        warning: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          DEFAULT: "#f59e0b",
        },
        error: {
          50: "#fef2f2",
          100: "#fee2e2",
          200: "#fecaca",
          300: "#fca5a5",
          400: "#f87171",
          500: "#ef4444",
          600: "#dc2626",
          700: "#b91c1c",
          800: "#991b1b",
          900: "#7f1d1d",
          DEFAULT: "#ef4444",
        },
        // Amber Gold
        gold: {
          50: "#fffbeb",
          100: "#fef3c7",
          200: "#fde68a",
          300: "#fcd34d",
          400: "#fbbf24",
          500: "#f59e0b",
          600: "#d97706",
          700: "#b45309",
          800: "#92400e",
          900: "#78350f",
          950: "#451a03",
          DEFAULT: "#f59e0b",
        },
        // Neutral colors with better dark mode variants
        gray: {
          50: "#f9fafb",
          100: "#f3f4f6",
          200: "#e5e7eb",
          300: "#d1d5db",
          400: "#9ca3af",
          500: "#6b7280",
          600: "#4b5563",
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#030712",
        },
        // E-commerce specific colors
        accent: {
          gold: "#fbbf24",
          silver: "#d1d5db",
          bronze: "#f97316",
          discount: "#ef4444",
          "new-arrival": "#8b5cf6",
          trending: "#ec4899",
        },
        // Background colors
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
        display: [
          "Plus Jakarta Sans",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "sans-serif",
        ],
        mono: [
          "JetBrains Mono",
          "ui-monospace",
          "SFMono-Regular",
          "Menlo",
          "Monaco",
          "Consolas",
          "Liberation Mono",
          "Courier New",
          "monospace",
        ],
      },
      fontSize: {
        // Extended font sizes for better typography scale
        "2xs": ["0.625rem", { lineHeight: "0.75rem" }],
        "3xs": ["0.5rem", { lineHeight: "0.625rem" }],
        "4xl": ["2.5rem", { lineHeight: "2.75rem" }],
        "5xl": ["3rem", { lineHeight: "3.25rem" }],
        "6xl": ["3.75rem", { lineHeight: "4rem" }],
        "7xl": ["4.5rem", { lineHeight: "4.75rem" }],
        "8xl": ["6rem", { lineHeight: "6.25rem" }],
        "9xl": ["8rem", { lineHeight: "8.25rem" }],
      },
      spacing: {
        // Extended spacing scale
        18: "4.5rem",
        22: "5.5rem",
        30: "7.5rem",
        38: "9.5rem",
        46: "11.5rem",
        54: "13.5rem",
        62: "15.5rem",
        70: "17.5rem",
        78: "19.5rem",
        86: "21.5rem",
        94: "23.5rem",
        102: "25.5rem",
        110: "27.5rem",
        118: "29.5rem",
      },
      animation: {
        // Smooth animations
        float: "float 6s ease-in-out infinite",
        "float-slow": "float 8s ease-in-out infinite",
        "float-fast": "float 4s ease-in-out infinite",
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.6s ease-out",
        "fade-in-down": "fadeInDown 0.6s ease-out",
        "slide-up": "slideUp 0.3s ease-out",
        "slide-down": "slideDown 0.3s ease-out",
        "slide-left": "slideLeft 0.3s ease-out",
        "slide-right": "slideRight 0.3s ease-out",
        "scale-in": "scaleIn 0.2s ease-out",
        "scale-out": "scaleOut 0.2s ease-in",
        "bounce-slow": "bounce 2s infinite",
        "bounce-fast": "bounce 1s infinite",
        "pulse-slow": "pulse 3s infinite",
        "pulse-fast": "pulse 1.5s infinite",
        shimmer: "shimmer 2s infinite",
        "shimmer-slow": "shimmer 3s infinite",
        "spin-slow": "spin 3s linear infinite",
        "spin-reverse": "spin 1s linear infinite reverse",
        "ping-slow": "ping 2s cubic-bezier(0, 0, 0.2, 1) infinite",
        "bounce-in": "bounceIn 0.5s ease-out",
        "bounce-out": "bounceOut 0.5s ease-in",
        wiggle: "wiggle 0.5s ease-in-out",
        heartbeat: "heartbeat 1s ease-in-out infinite",
        "gradient-x": "gradientX 3s ease infinite",
        "gradient-y": "gradientY 3s ease infinite",
        "gradient-xy": "gradientXY 3s ease infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-20px)" },
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideLeft: {
          "0%": { transform: "translateX(20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        slideRight: {
          "0%": { transform: "translateX(-20px)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
        scaleIn: {
          "0%": { transform: "scale(0.95)", opacity: "0" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        scaleOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "100%": { transform: "scale(0.95)", opacity: "0" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-1000px 0" },
          "100%": { backgroundPosition: "1000px 0" },
        },
        bounceIn: {
          "0%": { transform: "scale(0.3)", opacity: "0" },
          "50%": { transform: "scale(1.05)", opacity: "1" },
          "70%": { transform: "scale(0.9)" },
          "100%": { transform: "scale(1)", opacity: "1" },
        },
        bounceOut: {
          "0%": { transform: "scale(1)", opacity: "1" },
          "20%": { transform: "scale(1.1)", opacity: "1" },
          "100%": { transform: "scale(0.3)", opacity: "0" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-3deg)" },
          "50%": { transform: "rotate(3deg)" },
        },
        heartbeat: {
          "0%": { transform: "scale(1)" },
          "14%": { transform: "scale(1.3)" },
          "28%": { transform: "scale(1)" },
          "42%": { transform: "scale(1.3)" },
          "70%": { transform: "scale(1)" },
        },
        gradientX: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        gradientY: {
          "0%, 100%": { backgroundPosition: "50% 0%" },
          "50%": { backgroundPosition: "50% 100%" },
        },
        gradientXY: {
          "0%, 100%": { backgroundPosition: "0% 0%" },
          "50%": { backgroundPosition: "100% 100%" },
        },
      },
      backgroundImage: {
        // Gradient backgrounds
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-shimmer":
          "linear-gradient(90deg, transparent, rgba(255,255,255,0.4), transparent)",
        "gradient-primary": "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        "gradient-secondary":
          "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
        "gradient-success": "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
        "gradient-warning": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        "gradient-error": "linear-gradient(135deg, #ff0844 0%, #ffb199 100%)",
        "gradient-metal": "linear-gradient(135deg, #757F9A 0%, #D7DDE8 100%)",
        "gradient-ocean": "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
        "gradient-sunset": "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
        "gradient-forest": "linear-gradient(135deg, #0ba360 0%, #3cba92 100%)",

        // Pattern backgrounds
        "pattern-grid":
          'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%239C92AC" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
        "pattern-dots":
          'url("data:image/svg+xml,%3Csvg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="%239C92AC" fill-opacity="0.05" fill-rule="evenodd"%3E%3Ccircle cx="3" cy="3" r="3"/%3E%3Ccircle cx="13" cy="13" r="3"/%3E%3C/g%3E%3C/svg%3E")',
      },
      boxShadow: {
        // Enhanced shadows
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        "glass-light": "0 4px 16px 0 rgba(31, 38, 135, 0.15)",
        "glass-dark": "0 12px 48px 0 rgba(31, 38, 135, 0.5)",
        neumorphism: "20px 20px 60px #bebebe, -20px -20px 60px #ffffff",
        "neumorphism-inset":
          "inset 5px 5px 10px #bebebe, inset -5px -5px 10px #ffffff",
        "inner-lg": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        "inner-xl": "inset 0 4px 6px 0 rgba(0, 0, 0, 0.1)",
        "inner-2xl": "inset 0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        soft: "0 2px 15px -3px rgba(0, 0, 0, 0.07), 0 10px 20px -2px rgba(0, 0, 0, 0.04)",
        medium:
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        hard: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "xl-hard":
          "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        card: "0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)",
        "card-hover":
          "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
        dialog: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
        floating: "0 20px 60px rgba(0, 0, 0, 0.3)",
        "glow-primary": "0 0 20px rgba(59, 130, 246, 0.5)",
        "glow-secondary": "0 0 20px rgba(168, 85, 247, 0.5)",
        "glow-success": "0 0 20px rgba(34, 197, 94, 0.5)",
        "glow-warning": "0 0 20px rgba(245, 158, 11, 0.5)",
        "glow-error": "0 0 20px rgba(239, 68, 68, 0.5)",
      },
      backdropBlur: {
        xs: "2px",
        sm: "4px",
        md: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        "3xl": "32px",
      },
      backdropFilter: {
        none: "none",
        blur: "blur(20px)",
      },
      borderRadius: {
        none: "0",
        sm: "0.125rem",
        DEFAULT: "0.25rem",
        md: "0.375rem",
        lg: "0.5rem",
        xl: "0.75rem",
        "2xl": "1rem",
        "3xl": "1.5rem",
        "4xl": "2rem",
        "5xl": "2.5rem",
        full: "9999px",
        pill: "9999px",
      },
      borderWidth: {
        DEFAULT: "1px",
        0: "0",
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        6: "6px",
        8: "8px",
      },
      opacity: {
        0: "0",
        5: "0.05",
        10: "0.1",
        15: "0.15",
        20: "0.2",
        25: "0.25",
        30: "0.3",
        35: "0.35",
        40: "0.4",
        45: "0.45",
        50: "0.5",
        55: "0.55",
        60: "0.6",
        65: "0.65",
        70: "0.7",
        75: "0.75",
        80: "0.8",
        85: "0.85",
        90: "0.9",
        95: "0.95",
        100: "1",
      },
      zIndex: {
        0: "0",
        10: "10",
        20: "20",
        30: "30",
        40: "40",
        50: "50",
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        auto: "auto",
        dropdown: "1000",
        sticky: "1020",
        fixed: "1030",
        "modal-backdrop": "1040",
        modal: "1050",
        popover: "1060",
        tooltip: "1070",
        toast: "1080",
        notification: "1090",
      },
      transitionProperty: {
        height: "height",
        spacing: "margin, padding",
        width: "width",
        size: "width, height",
        position: "top, right, bottom, left",
        background: "background-color, background-image, background-position",
        colors:
          "color, background-color, border-color, text-decoration-color, fill, stroke",
        all: "all",
        none: "none",
        opacity: "opacity",
        shadow: "box-shadow",
        transform: "transform",
      },
      transitionTimingFunction: {
        bounce: "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        elastic: "cubic-bezier(0.68, -0.6, 0.32, 1.6)",
        smooth: "cubic-bezier(0.4, 0, 0.2, 1)",
        accelerate: "cubic-bezier(0.4, 0, 1, 1)",
        decelerate: "cubic-bezier(0, 0, 0.2, 1)",
      },
      transitionDuration: {
        0: "0ms",
        75: "75ms",
        100: "100ms",
        150: "150ms",
        200: "200ms",
        300: "300ms",
        500: "500ms",
        700: "700ms",
        1000: "1000ms",
        2000: "2000ms",
        3000: "3000ms",
      },
      gridTemplateColumns: {
        // Enhanced grid columns
        13: "repeat(13, minmax(0, 1fr))",
        14: "repeat(14, minmax(0, 1fr))",
        15: "repeat(15, minmax(0, 1fr))",
        16: "repeat(16, minmax(0, 1fr))",
        24: "repeat(24, minmax(0, 1fr))",
        "auto-fit-100": "repeat(auto-fit, minmax(100px, 1fr))",
        "auto-fit-150": "repeat(auto-fit, minmax(150px, 1fr))",
        "auto-fit-200": "repeat(auto-fit, minmax(200px, 1fr))",
        "auto-fit-250": "repeat(auto-fit, minmax(250px, 1fr))",
        "auto-fit-300": "repeat(auto-fit, minmax(300px, 1fr))",
        "auto-fill-100": "repeat(auto-fill, minmax(100px, 1fr))",
        "auto-fill-150": "repeat(auto-fill, minmax(150px, 1fr))",
        "auto-fill-200": "repeat(auto-fill, minmax(200px, 1fr))",
        "auto-fill-250": "repeat(auto-fill, minmax(250px, 1fr))",
        "auto-fill-300": "repeat(auto-fill, minmax(300px, 1fr))",
      },
      gridTemplateRows: {
        // Enhanced grid rows
        8: "repeat(8, minmax(0, 1fr))",
        9: "repeat(9, minmax(0, 1fr))",
        10: "repeat(10, minmax(0, 1fr))",
        11: "repeat(11, minmax(0, 1fr))",
        12: "repeat(12, minmax(0, 1fr))",
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    // require("@tailwindcss/container-queries"),
    function ({ addUtilities, addComponents, addBase, theme }) {
      // Custom utilities
      addUtilities({
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-thin": {
          "scrollbar-width": "thin",
          "&::-webkit-scrollbar": {
            width: "8px",
            height: "8px",
          },
        },
        ".scrollbar-thumb-rounded": {
          "&::-webkit-scrollbar-thumb": {
            borderRadius: "9999px",
          },
        },
        ".text-shadow": {
          textShadow: "0 2px 4px rgba(0,0,0,0.10)",
        },
        ".text-shadow-lg": {
          textShadow: "0 4px 8px rgba(0,0,0,0.12), 0 2px 4px rgba(0,0,0,0.08)",
        },
        ".text-shadow-none": {
          textShadow: "none",
        },
        ".bg-blur": {
          backdropFilter: "blur(8px)",
        },
        ".backface-visible": {
          backfaceVisibility: "visible",
        },
        ".backface-hidden": {
          backfaceVisibility: "hidden",
        },
        ".perspective-1000": {
          perspective: "1000px",
        },
        ".preserve-3d": {
          transformStyle: "preserve-3d",
        },
        ".content-auto": {
          contentVisibility: "auto",
        },
      });

      // Custom components
      addComponents({
        ".btn": {
          padding: `${theme("spacing.2")} ${theme("spacing.4")}`,
          borderRadius: theme("borderRadius.DEFAULT"),
          fontWeight: theme("fontWeight.semibold"),
          transition: "all 0.2s ease",
          "&:focus": {
            outline: "2px solid transparent",
            outlineOffset: "2px",
            ringWidth: "2px",
            ringColor: theme("colors.primary.500"),
          },
          "&:disabled": {
            opacity: "0.5",
            cursor: "not-allowed",
          },
        },
        ".card": {
          backgroundColor: theme("colors.white"),
          borderRadius: theme("borderRadius.xl"),
          padding: theme("spacing.6"),
          boxShadow: theme("boxShadow.md"),
          "&:hover": {
            boxShadow: theme("boxShadow.lg"),
          },
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: theme("colors.gray.800"),
          },
        },
        ".input": {
          width: "100%",
          padding: `${theme("spacing.3")} ${theme("spacing.4")}`,
          borderRadius: theme("borderRadius.DEFAULT"),
          borderWidth: "1px",
          borderColor: theme("colors.gray.300"),
          backgroundColor: theme("colors.white"),
          transition: "all 0.2s ease",
          "&:focus": {
            outline: "none",
            borderColor: theme("colors.primary.500"),
            ringWidth: "2px",
            ringColor: theme("colors.primary.500"),
          },
          "@media (prefers-color-scheme: dark)": {
            backgroundColor: theme("colors.gray.800"),
            borderColor: theme("colors.gray.700"),
          },
        },
      });

      // Base styles
      addBase({
        html: {
          scrollBehavior: "smooth",
        },
        body: {
          fontFeatureSettings: '"rlig" 1, "calt" 1',
          fontVariantNumeric: "tabular-nums",
        },
        "@media (prefers-reduced-motion: reduce)": {
          "*": {
            animationDuration: "0.01ms !important",
            animationIterationCount: "1 !important",
            transitionDuration: "0.01ms !important",
          },
        },
      });
    },
  ],
  // Safelist for dynamic classes
  safelist: [
    {
      pattern:
        /bg-(primary|secondary|success|warning|error)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /text-(primary|secondary|success|warning|error)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /border-(primary|secondary|success|warning|error)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern:
        /ring-(primary|secondary|success|warning|error)-(50|100|200|300|400|500|600|700|800|900)/,
    },
    {
      pattern: /shadow-(sm|md|lg|xl|2xl|inner|none)/,
    },
    {
      pattern:
        /animate-(fade|slide|scale|bounce|pulse|spin|ping|float|shimmer)/,
    },
    "grid-cols-1",
    "grid-cols-2",
    "grid-cols-3",
    "grid-cols-4",
    "grid-cols-5",
    "grid-cols-6",
    "grid-cols-7",
    "grid-cols-8",
    "grid-cols-9",
    "grid-cols-10",
    "grid-cols-11",
    "grid-cols-12",
    "md:grid-cols-1",
    "md:grid-cols-2",
    "md:grid-cols-3",
    "md:grid-cols-4",
    "md:grid-cols-5",
    "md:grid-cols-6",
    "lg:grid-cols-1",
    "lg:grid-cols-2",
    "lg:grid-cols-3",
    "lg:grid-cols-4",
    "lg:grid-cols-5",
    "lg:grid-cols-6",
  ],
};
