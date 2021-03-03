import * as colors from 'twind/colors'
import { aspectRatio } from '@twind/aspect-ratio'
import typography from '@twind/typography'
import { forms } from '@twind/forms'
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
  },
  plugins: {
    aspectRatio,
    forms,
    ...typography({
      className: 'prose' // Defaults to 'prose'
    })
  }
}
