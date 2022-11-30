import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#16B26E",
    },
    secondary: {
      main: "#005db9",
    },
    gray: {
      main: "#a0aeba",
    },
    text: {
      primary: "#323f4a", //headings
      hint: "rgba(0,0,0,0.38)", //hints
      secondary: "#637381", //headings
      disabled: "rgba(0, 0, 0, 0.7)", //disabled
      subtitle2: "#375448", //for small heading guides
      linkActive: "#005db9",
      white: "#fff",
    },
    background: {
      // default: '#eff8fa',
      // default: "rgba(248,250,253,1)",
      default: "white",
      // paper: "rgba(228, 229, 235, 0.2)",
      paper: "#FAFAFB",
    },
    header: {
      color: "#fff",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        colorDefault: {
          backgroundImage: "none",
          backgroundColor: "#181a26",
          borderBottom: "1px solid rgba(50, 54, 71 ,0.90)",
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        text: {
          // paddingLeft: 0,
        }
     }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backgroundImage: "none",
        },
      },
    },
    // MuiCollapse: {
    //   styleOverrides: {
    //     wrapper:{
    //       backgroundColor: "#373a4a"
    //     }
    //   }
    // },
    MuiInputBase: {
      styleOverrides: {
        input: {
          // "&:hover": {
          //   backgroundColor: "#FF0000",
          // },
        },
      },
    },
  },
  typography: {
    fontFamily: ["ManropeRegular", "ManropeBold"],
    h1: {
      fontFamily: "ManropeRegular",
    },
    h2: {
      fontFamily: "ManropeRegular",
    },
    h3: {
      fontFamily: "ManropeRegular",
    },
    h4: {
      fontFamily: "ManropeBold",
      fontSize: "1.5rem",
      lineHeight: "2rem"

    },
    h5: {
      fontFamily: "ManropeBold",
      fontSize: "1.2rem",

    },

    h6: {
      fontFamily: "ManropeBold",
      fontSize: "1.1rem",
    },

    body1: {
      fontFamily: "ManropeRegular",
      fontSize: "16px",
    },
    body2: {
      fontFamily: "ManropeRegular",
      fontSize: "14px",
    },
    span: {
      fontFamily: "ManropeRegular",
    },
    overline: {
      fontFamily: "ManropeBold",
    },
    caption: {
      fontFamily: "ManropeBold",
      fontSize: "13px"
    },
    subtitle1: {
      fontFamily: "ManropeRegular",
    },
    subtitle2: {
      fontFamily: "ManropeBold",
    },
    button: {
      fontFamily: "ManropeBold",
    },
  },
});
