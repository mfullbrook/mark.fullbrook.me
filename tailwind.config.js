const defaultTheme = require('tailwindcss/defaultTheme')
const uiColors = require('@tailwindcss/ui/colors')
module.exports = {
  purge: [],
  theme: {
    screens: {
        'sm': '400px',
        'md': '768px',
        'lg': '1024px',
        'xl': '1280px',
    },
    extend: {
        colors: {
            yellow: {
                ...uiColors.yellow,
                default: '#fcfe75'
            }
        },
        fontFamily: theme => ({
            sans: ['Inter var', ...defaultTheme.fontFamily.sans]
        })
    },
  },
  variants: {},
  plugins: [
      require('@tailwindcss/ui'),
  ],
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  }
}
