import { createTheme } from '@mui/material';
import { grey } from '@mui/material/colors';

export const theme = createTheme({
    palette: {
        primary: {
            dark: '#1c5b02',
            main: '#337917',
            light: '#4b9c2c',
        },
        secondary: {
            dark: '#074d35',
            main: '#17795d',
            light: '#1f9678',
        },
        grey: grey,
        dashboard: {
            main: '#1565C0',
            contrastText: '#fff',
        },
    },
    spacing: 8,
    shape: {
        borderRadius: 10,
    },
    typography: {},
});
