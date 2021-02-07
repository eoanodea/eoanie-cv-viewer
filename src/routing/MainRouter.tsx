/*
 * File: MainRouter.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 26th January 2021 1:05:02 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 12:01:07 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import React from "react";
import { Route, Switch } from "react-router-dom";
import { Grid } from "@material-ui/core";

import Home from "../pages/Home";
import CV from "../pages/CV";
import Header from "../components/layout/Header";

const MainRouter = () => {
  return (
    <React.Fragment>
      <Header />
      <Grid
        container
        spacing={8}
        justify="center"
        style={{ marginTop: "20px", marginBottom: "20px" }}
      >
        <Grid item xs={11}>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route
              path="/cv/:lang"
              render={(props) => <CV lang={props.match.params.lang} />}
            />
          </Switch>
        </Grid>
      </Grid>
    </React.Fragment>
  );
};

export default MainRouter;
