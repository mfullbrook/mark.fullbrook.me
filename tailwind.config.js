const defaultTheme = require("tailwindcss/defaultTheme")
const uiColors = require("@tailwindcss/ui/colors")
module.exports = {
  purge: ["./resources/**/*.html"],
  theme: {
    screens: {
      sm: "400px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        yellow: {
          ...uiColors.yellow,
          default: "#fcfe75",
        },
        primary: uiColors.pink["500"],
      },
      fontFamily: (theme) => ({
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      }),
      boxShadow: {
        "outline-primary-rings":
          "0 0 0 10px rgba(231, 70, 148, 0.5), 0 0 0 20px rgba(231, 70, 148, 0.2)",
      },
    },
    typography: (theme) => ({
      default: {
        css: {
          color: theme("colors.gray.300"),
          a: {
            color: theme("colors.primary"),
          },
          strong: {
            color: theme("colors.gray.100"),
          },
          h2: {
            color: theme("colors.gray.100"),
          },
          h3: {
            color: theme("colors.gray.100"),
          },
          h4: {
            color: theme("colors.gray.100"),
          },
          blockquote: {
            color: theme("colors.gray.200"),
          },
          ol: {
            counterReset: null,
            listStyleType: "decimal",
            listStylePosition: "inside",
          },
          "ol > li": {
            counterIncrement: null,
            position: "relative",
          },
          "ol > li::before": null,
          code: {
            color: theme("colors.pink.600"),
          },
        },
      },
    }),
  },
  variants: {},
  plugins: [require("@tailwindcss/ui")],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
}
