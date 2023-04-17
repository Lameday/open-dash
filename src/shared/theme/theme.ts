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
            dark: '#5E35B1',
            main: '#1E88E5',
            light: '#1f9678',
        },
        grey: grey,
    },
    spacing: 8,
    shape: {
        borderRadius: 10,
    },
    typography: {},
});
