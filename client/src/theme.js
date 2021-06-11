import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#6A5736',
            secondary: '#C6AE86',
            tertiary: '#F0E6D5',
            hover: '#063cc7',
        },
        secondary: {
            main: '#3A3A3C'
        },
        tertiary: {
            main: '#FFFFFF'
        }
    },
    typography: {
        fontFamily: [
            'Open Sans', 
            'sans-serif'
        ]
    },
    inputs: {
        primary: {
            main: '#F3F3F4',
            secondary: '#C6AE86',
            tertiary: '#F0E6D5',
        }
    },
    buttons: {
        primary: {
            main: '#6A5736',
            secondary: '#C6AE86',
            tertiary: '#F0E6D5',
        }
    }
});

// eslint-disable-next-line
const darkTheme = createMuiTheme({
    palette: {
        type: 'dark',
    }
})

export default theme;