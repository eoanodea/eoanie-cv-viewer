/*
 * File: Home.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 26th January 2021 1:09:55 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 5:50:20 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import {
  Button,
  createStyles,
  Fade,
  Theme,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import { Player } from "@lottiefiles/react-lottie-player";
import data from "./../assets/lottie/lf30_editor_ifuollbc.json";

import React from "react";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      backgroundColor: palette.secondary.main,
      maxWidth: "800px",
      margin: "0 auto",
      height: "500px",
      display: "flex",
      textAlign: "center",
      alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    wrapper: {
      position: "absolute",
      top: 50,
      left: 0,
      width: "100vw",
      height: "-webkit-fill-available",
      display: "flex",
      overflow: "hidden",
      zIndex: 10,
      "& iframe": {
        width: "100vw",
        // height: "100vw",
        height: "-webkit-fill-available",
        zIndex: 0,
        position: "absolute",
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      },
    },
    content: {
      alignSelf: "flex-end",
      width: "100%",
      margin: spacing(4),
      height: "160px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "space-between",
      zIndex: 1,
      flexWrap: "wrap",
    },
    lottieWrapper: {
      position: "absolute",
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
      "& #lottie": {
        height: "100vh",
      },
      // height,
    },
    buttonWrapper: {
      display: "flex",
    },
    button: {
      margin: spacing(2),
      // backgroundColor: palette.secondary.main,
      // color: "#fff",
    },
  });

type IProps = {
  classes: {
    root: any;
    // actions: string;
    lottieWrapper: string;
    wrapper: string;
    content: string;
    buttonWrapper: string;
    button: string;
  };
};

const Home = ({ classes }: IProps) => {
  const [loaded, setLoaded] = React.useState(false);

  return (
    <div className={classes.wrapper}>
      <Fade in={loaded} timeout={500}>
        <iframe
          title="Hero"
          onLoad={() => {
            setLoaded(true);
          }}
          src={process.env.REACT_APP_HERO_P5_SKETCH}
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </Fade>
      <Fade in={loaded} timeout={1500}>
        <div className={classes.lottieWrapper}>
          <Player
            src={data}
            background="transparent"
            style={{ width: "150px", margin: "auto" }}
            loop
            autoplay
          ></Player>
        </div>
      </Fade>

      <div className={classes.content}>
        {loaded && (
          <div className={classes.buttonWrapper}>
            {/* <Typography variant="h1" style={{ color: "#fff" }}>
            Pick a language
          </Typography> */}
            <Button
              component={Link}
              className={classes.button}
              aria-label="Open CV in English"
              to="/cv/english"
              variant="contained"
              color="primary"
            >
              English
              {/* whos there */}
            </Button>
            <Button
              component={Link}
              aria-label="Open CV in German"
              to="/cv/german"
              className={classes.button}
              variant="contained"
              color="primary"
            >
              Deutsch
              {/* wer da ist */}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default withStyles(styles)(Home);
