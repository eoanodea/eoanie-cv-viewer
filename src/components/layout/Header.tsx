/*
 * File: Header.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Sunday, 7th February 2021 11:59:39 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 1:41:26 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

/**
 * Primary dependencies
 */
import React, { useEffect } from "react";

/**
 * Component Library imports
 */
import {
  AppBar,
  FormControlLabel,
  IconButton,
  Switch,
  Toolbar,
} from "@material-ui/core";
import { GetApp, GitHub, Home, Mail } from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";
import { config } from "../../config/config";

/**
 * Header for the application
 */
const Header = ({ history }: any) => {
  const [isEnglish, setIsEnglish] = React.useState(true);
  const [displaySwitch, setDisplaySwitch] = React.useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      history.push("/cv/german");
    } else history.push("/cv/english");
  };

  useEffect(() => {
    const checkPage = () => {
      if (window.location.pathname.includes("/cv/")) {
        setDisplaySwitch(true);
        setIsEnglish(window.location.pathname.includes("/english"));
      } else setDisplaySwitch(false);
    };

    checkPage();
    history.listen(() => {
      checkPage();
    });
  }, [history]);

  return (
    <AppBar position="sticky">
      <Toolbar style={{ justifyContent: "space-between" }}>
        <IconButton component={Link} to="/">
          <Home />
        </IconButton>

        <div>
          {displaySwitch && (
            <React.Fragment>
              <FormControlLabel
                control={
                  <Switch onChange={handleChange} checked={!isEnglish} />
                }
                label={isEnglish ? "English 🇮🇪" : "Deutsch 🇩🇪"}
              />
              <IconButton
                href={config[window.location.pathname.split("cv/")[1]]}
                download={`eoanodea-cv-${
                  window.location.pathname.split("cv/")[1]
                }`}
              >
                <GetApp />
              </IconButton>
            </React.Fragment>
          )}
          <IconButton
            href="https://github.com/eoanodea/eoanie-cv-viewer"
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton component={Link} to="/contact">
            <Mail />
          </IconButton>
          {/* <IconButton href="https://about.eoan.ie/#contact" target="_blank">
            <Mail />
          </IconButton> */}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
