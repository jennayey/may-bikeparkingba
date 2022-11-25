import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#16B26E",
    },
    secondary: {
      main: "#005db9",
    },
    text: {
      primary: "rgba(13, 18, 38,1)", //headings
      hint: "rgba(0,0,0,0.38)", //hints
      secondary: "rgba(13, 18, 38, 0.75)", //headings
      disabled: "rgba(0, 0, 0, 0.7)", //disabled
      subtitle2: "rgba(76, 88, 125, .8)", //for small heading guides
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
          paddingLeft: 0,
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
          "&:hover": {
            backgroundColor: "#FF0000",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: ["GothamBlack", "GothamMedium", "GothamRegular"],
    h1: {
      fontFamily: "GothamRegular",
    },
    h2: {
      fontFamily: "GothamRegular",
    },
    h3: {
      fontFamily: "GothamRegular",
    },
    h4: {
      fontFamily: "GothamMedium",
    },
    h5: {
      fontFamily: "GothamMedium",
      fontSize: "1.2rem",

    },

    h6: {
      fontFamily: "GothamMedium",
      fontSize: "1.1rem",
    },

    body1: {
      fontFamily: "GothamRegular",
      fontSize: "16px",
    },
    body2: {
      fontFamily: "GothamRegular",
      fontSize: "14px",
    },
    span: {
      fontFamily: "GothamRegular",
    },
    overline: {
      fontFamily: "GothamMedium",
    },
    caption: {
      fontFamily: "GothamRegular",
    },
    subtitle1: {
      fontFamily: "GothamRegular",
    },
    subtitle2: {
      fontFamily: "GothamMedium",
    },
    button: {
      fontFamily: "GothamMedium",
    },
  },
});
