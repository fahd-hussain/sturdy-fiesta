import { red } from '@mui/material/colors'
import { createTheme } from '@mui/material/styles'
import { primary } from 'constant/css-variables.const'

// Create a theme instance.
export const theme = createTheme({
  palette: {
    primary: {
      main: primary,
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: red.A400,
    },
  },
})
