import Typography from 'typography'
import FairyGates from 'typography-theme-fairy-gates'

const primaryColor = '#64B6AC'

FairyGates.overrideThemeStyles = ({ rhythm }) => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
    backgroundImage: 'none',
  },
  a: {
    color: primaryColor,
    backgroundImage: `linear-gradient(to top, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0) 1px, ${primaryColor} 1px, ${primaryColor} 2px, rgba(0, 0, 0, 0) 2px)`,
  },
  blockquote: {
    borderLeft: `${rhythm(0.2)} solid ${primaryColor}`,
  },
})

const typography = new Typography({
  ...FairyGates,
  googleFonts: [],
})

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
