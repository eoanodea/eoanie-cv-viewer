/*
 * File: Header.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Sunday, 7th February 2021 11:59:39 am
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 1:01:01 pm
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
import { GitHub, Home } from "@material-ui/icons";
import { Link, withRouter } from "react-router-dom";

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
    history.listen(() => {
      if (window.location.pathname !== "/") {
        setDisplaySwitch(true);
        setIsEnglish(window.location.pathname.includes("/english"));
      } else setDisplaySwitch(false);
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
            <FormControlLabel
              control={<Switch onChange={handleChange} checked={!isEnglish} />}
              label={isEnglish ? "English 🇮🇪" : "Deutsch 🇩🇪"}
            />
          )}
          <IconButton
            href="https://github.com/eoanodea/eoanie-cv-viewer"
            target="_blank"
          >
            <GitHub />
          </IconButton>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(Header);
