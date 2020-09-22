const defaultTheme = require("tailwindcss/defaultTheme")
const uiColors = require("@tailwindcss/ui/colors")
module.exports = {
  purge: ["./resources/**/*.html", "./content/globals/settings.yaml"],
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
        primary: "#fcfe75",
      },
      fontFamily: (theme) => ({
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      }),
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
