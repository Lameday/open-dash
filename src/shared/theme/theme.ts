import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            dark: '#1b5b02',
            main: '#337917',
            light: '#6db754',
        },
        secondary: {
            dark: '#074d35',
            main: '#17795d',
            light: '#35a68a',
        },
        grey: grey,
    },
    spacing: 8,
    shape: {
        borderRadius: 10,
    },
    typography: {},
});
