import Typography from 'typography'
import FairyGates from 'typography-theme-fairy-gates'

FairyGates.overrideThemeStyles = () => ({
  'a.gatsby-resp-image-link': {
    boxShadow: 'none',
    backgroundImage: 'none'
  },
})

const typography = new Typography({
  ...FairyGates,
  googleFonts: [],
});

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}

export default typography
export const rhythm = typography.rhythm
export const scale = typography.scale
