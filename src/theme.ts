/**
 * File: theme.js
 * Project: ca2-client
 * Version 0.1.0
 * File Created: Tuesday, 5th January 2021 1:46:00 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 1:49:32 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import { createMuiTheme, responsiveFontSizes } from "@material-ui/core/styles";

let theme = createMuiTheme({
  palette: {
    primary: {
      // main: "#fff",
      main: "#F14719",
    },
    secondary: {
      main: "#fff",
    },
    type: "dark",
  },
  typography: {
    fontFamily: ["Roboto", "sans-serif"].join(","),
    h1: {
      fontWeight: 800,
      fontSize: "3.4rem",
    },
    h2: {
      fontWeight: 500,
      fontSize: "2rem",
    },
    h3: {
      color: "#fff",
      fontSize: "1.6rem",
    },
    body1: {
      color: "#fff",
    },
    caption: {
      color: "#ffffffb3",
    },
  },
  overrides: {
    MuiTextField: {
      root: {
        width: "100%",
        margin: "16px auto",
      },
    },
    MuiListItemText: {
      root: {
        display: "flex",
        flexDirection: "column-reverse",
      },
    },
  },
});

theme = responsiveFontSizes(theme);

export default theme;
