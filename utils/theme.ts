import { Roboto, Heebo } from 'next/font/google';
import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

export const heebo = Heebo({
  weight: ['300', '400', '500', '700'],
  subsets: ['latin'],
  display: 'swap',
  fallback: ['Helvetica', 'Arial', 'sans-serif'],
});

// Create a theme instance.
const theme = createTheme({
  palette: {
    primary: {
      main: '#FF6464',
    },
    secondary: {
      main: '#00A8CC',
    },
    error: {
      main: red.A400,
    },
  },
  components: {
    MuiContainer: {
      styleOverrides: {
        maxWidthSm: {
          maxWidth: '680px',
          '@media (min-width: 600px)': { maxWidth: '680px' },
        },
        maxWidthMd: {
          maxWidth: '860px',
          '@media (min-width: 900px)': { maxWidth: '860px' },
        },
      },
      defaultProps: {
        maxWidth: 'md',
      },
      variants: [],
    },
    MuiLink: {
      defaultProps: {
        underline: 'hover',
      },
      styleOverrides: {
        root: {
          color: 'black',

          '&:hover, &.active': {
            color: '#FF6464',
          },
        },
      },
    },
  },
  typography: {
    fontFamily: heebo.style.fontFamily,
  },
});

export default theme;
