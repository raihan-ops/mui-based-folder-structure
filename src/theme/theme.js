import { createTheme } from '@mui/material/styles';
import { red } from '@mui/material/colors';

// A custom theme for this app
const theme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
        },
        secondary: {
            main: '#19857b',
        },
        error: {
            main: red.A400,
        },
    },
    typography: {
        subtitle1: {
            fontSize: 12,
        },
        body1: {
            fontWeight: 500,
        },
        button: {
            fontStyle: 'italic',
        },
        h4: {
            fontSize: '1.2rem',
            '@media (max-width:500px)': {
                fontSize: '40px',
            },
            '@media (max-width:900px)': {
                fontSize: '100px',
            },
           
        }
    },
});

export default theme;