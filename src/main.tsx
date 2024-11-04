import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import "@fontsource-variable/manrope";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { AuthContextProvider } from "./store/auth-context.tsx";

const theme = createTheme({
  palette: {
    primary: {
      main: "#4F46BA",
    },
    secondary: {
      main: "#FF7F5C",
    },
  },
  typography: {
    fontFamily: "Manrope variable, sans-serif",
    body1: {
      color: "#757095",
    },
    body2: {
      color: "#000",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none",
          padding: "16px 32px",
          fontSize: "14px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          boxShadow: "none", // Remove shadow from AppBar
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        h4: {
          fontFamily: "Gilroy, sans-serif",
        },
      },
    },
    MuiInput: {
      styleOverrides: {
        root: {
          "&::before": {
            borderBottom: "none",
            content: "none",
          },
          // "&::after": {
          //   borderBottom: "none",
          //   content: "none",
          // },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          "&:hover": {
            textDecoration: "underline",
          },
        },
      },
    },
  },
});

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <AuthContextProvider>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </AuthContextProvider>
  </StrictMode>
);
