import type { Config } from "tailwindcss";

const config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      screens: {
        "watch-sm": "162px",
        "watch-md": "197px",
        xxs: "320px",
        xs: "375px",
        "sm-md": "400px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
        "3xl": "1920px",
        "4xl": "2560px",
        "5xl": "3840px",
      },
      colors: {
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      gridTemplateColumns: {
        customCols: "324px 30px 324px",
        "custom-xl-1": "800px 281px",
        "custom-xl-2": "457px 621px",
        "custom-3": "324px 100px 324px",
        "custom-4": "25px 1fr",
        "custom-price-cols": "350px 350px 350px",
        "custom-functionalities-cols": "334px 334px 334px",
        "custom-dashboard-paste-columns": "280px 1fr",
        "custom-display-columns": "80px 1fr",
        "custom-connexion-myideals": "40% 60%",
      },
      gridTemplateRows: {
        customRows: "125px 751px 125px",
        "custom-xl": "344px",
        "custom-xl-desktop": "repeat(4, 1fr)",
        "custom-price-rows": "575px ",
        "custom-functionalities-rows": "334px",
        "custom-dashboard-paste-rows": "80px 1fr",
      },
      dropShadow: {
        "custom-orange": "1px 1px 10px rgba(255, 122, 0, 0.4)",
        "custom-dashboard": "0 10px 100px -40px rgba(255, 122, 0, 0.6)",
        "custom-white-pricing": "0 0 50px rgba(255, 255, 255, 0.1)",
        "custom-btn-pricing": "0 0 100px rgba(126, 127, 129, 0.2",
        "custom-main-pricing": "0 4 250px -60px rgba(255, 133, 23, 0.2)",
        "custom-main-pricing-2": "0 0 250px  rgba(255, 255, 255, 0.1)",
      },
      boxShadow: {
        "inner-custom-pricing": "inset 0 4px 20px 1px rgba(0, 0, 0, 0.4)",
        "inner-main-pricing": "inset 0 2px 200px 10px rgba(0, 0, 0, 0.5)",
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "0",
          },
        },
        "border-beam": {
          "100%": {
            "offset-distance": "100%",
          },
        },
        meteor: {
          "0%": {
            transform: "rotate(215deg) translateX(0)",
            opacity: "1",
          },
          "70%": {
            opacity: "1",
          },
          "100%": {
            transform: "rotate(215deg) translateX(-500px)",
            opacity: "0",
          },
        },
        "shiny-text": {
          "0%, 90%, 100%": {
            "background-position": "calc(-100% - var(--shiny-width)) 0",
          },
          "30%, 60%": {
            "background-position": "calc(100% + var(--shiny-width)) 0",
          },
        },
        gradient: {
          to: {
            backgroundPosition: "var(--bg-size) 0",
          },
        },
        "shimmer-slide": {
          to: {
            transform: "translate(calc(100cqw - 100%), 0)",
          },
        },
        "spin-around": {
          "0%": {
            transform: "translateZ(0) rotate(0)",
          },
          "15%, 35%": {
            transform: "translateZ(0) rotate(90deg)",
          },
          "65%, 85%": {
            transform: "translateZ(0) rotate(270deg)",
          },
          "100%": {
            transform: "translateZ(0) rotate(360deg)",
          },
        },
        pingCustom: {
          "0%, 100%": { transform: "scale(1)", opacity: "1" },
          "50%": { transform: "scale(1.05)", opacity: "0.95" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "border-beam": "border-beam calc(var(--duration)*1s) infinite linear",
        meteor: "meteor 5s linear infinite",
        "shiny-text": "shiny-text 8s infinite",
        gradient: "gradient 8s linear infinite",
        "shimmer-slide":
          "shimmer-slide var(--speed) ease-in-out infinite alternate",
        "spin-around": "spin-around calc(var(--speed) * 2) infinite linear",
        pingCustom: "pingCustom 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;

export default config;
