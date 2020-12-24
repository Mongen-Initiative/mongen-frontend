import { createMuiTheme } from "@material-ui/core/styles"

/**
 * material-ui theme color pallete
 * @see https://material-ui.com/style/color/
 */
export const MuiTheme = createMuiTheme({
  palette: {
    primary: {
      light: "#ffffff",
      main: "#62834e",
      dark: "#ffffff",
    },

    secondary: {
      light: "#8c8d8d",
      main: "#2a2a2a",
      dark: "#395265",
    },
  },
})
