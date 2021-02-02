/*
 * File: Home.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 26th January 2021 1:09:55 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Tuesday, 2nd February 2021 2:48:43 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import { Button, Typography } from "@material-ui/core";
import { Link } from "react-router-dom";
import React from "react";

const Home = () => {
  const [step, setStep] = React.useState(0);
  const [isEnglish, setIsEnglish] = React.useState(true);

  return (
    <div>
      <Typography variant="h2">Welcome</Typography>
      <Typography variant="body2">Pick your Language</Typography>

      <Button
        variant="contained"
        color="primary"
        component={Link}
        to="/cv/english"
      >
        English
      </Button>
      <Button
        variant="contained"
        color="secondary"
        component={Link}
        to="/cv/german"
      >
        Deutsch
      </Button>
    </div>
  );
};

export default Home;
