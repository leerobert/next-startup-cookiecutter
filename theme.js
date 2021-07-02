import { createMuiTheme } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#556cd6',
    },
    secondary: {
      main: '#19857b',
    },
    alternate: {
      main: "rgb(247, 249, 250)",
      dark: "#e8eaf6",
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  layout: {
    contentWidth: 1236,
  },
  // typography: {
  //   fontFamily: 'Lato',
  // },
});

export default theme;