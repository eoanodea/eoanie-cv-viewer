/*
 * File: Header.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Sunday, 7th February 2021 11:59:39 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 5:55:45 pm
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
import { Link } from "react-router-dom";
import { config } from "../../config/config";

import { useLocation } from "react-router-dom";
import ReactGA from "react-ga";

/**
 * Header for the application
 */
const Header = ({ history }: any) => {
  const [isEnglish, setIsEnglish] = React.useState(true);
  const [displaySwitch, setDisplaySwitch] = React.useState(false);

  const location = useLocation();

  console.log("Initializing GA");
  ReactGA.initialize(config.ga_id);
  ReactGA.pageview(window.location.pathname + window.location.search);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.checked) {
      history.push("/cv/german");
    } else history.push("/cv/english");
  };

  useEffect(() => {
    const checkPage = () => {
      if (location.pathname.includes("/cv/")) {
        setDisplaySwitch(true);
        setIsEnglish(location.pathname.includes("/english"));
      } else {
        setDisplaySwitch(false);
      }
      ReactGA.pageview(location.pathname + location.search);
    };

    checkPage();
  }, [location]);

  return (
    <AppBar position="sticky" style={{ backgroundColor: "#000" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <IconButton aria-label="Home" component={Link} to="/">
          <Home />
        </IconButton>

        <div>
          {displaySwitch && (
            <React.Fragment>
              <FormControlLabel
                control={
                  <Switch onChange={handleChange} checked={!isEnglish} />
                }
                label={isEnglish ? "English" : "Deutsch"}
              />
              <IconButton
                aria-label="Download CV"
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
            aria-label="View Code on Github"
            href="https://github.com/eoanodea/eoanie-cv-viewer"
            rel="noreferrer"
            target="_blank"
          >
            <GitHub />
          </IconButton>
          <IconButton aria-label="Contact" component={Link} to="/contact">
            <Mail />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
