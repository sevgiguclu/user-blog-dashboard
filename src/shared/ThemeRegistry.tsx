"use client";//We made this file work as Client Component.

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: "#1976d2",//blue
        },
        secondary: {
            main: "#dc004e",//red
        },
        background: {
            default: "#f4f4f4",
        },
    },
});

export default function ThemeRegistry({ children }: { children: React.ReactNode }) {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline /> {/* global reset for Material UI */}
            {children}
        </ThemeProvider>
    );
}
