import * as colors from 'twind/colors'

export default {
  hash: false, // hash all generated class names (default: false)
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['Helvetica', 'sans-serif']
      },
      colors: {
        ...colors,
        'itana-red': '#d40000'
      },
      screens: {
        standalone: { raw: '(display-mode:standalone)' }
      }
    }
  }
}
