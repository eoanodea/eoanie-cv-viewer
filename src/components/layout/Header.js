/**
 * Primary dependencies
 */
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";

/**
 * Component Library imports
 */
import {
  AppBar,
  Button,
  createStyles,
  Toolbar,
  withStyles,
} from "@material-ui/core";
import { Link } from "react-router-dom";

import routes from "./../../routing/routes";

const styles = ({ palette }) =>
  createStyles({
    root: {
      justifyContent: "space-between",
      "& a": {
        color: "#fff",
      },
    },
  });

/**
 * Header for the application
 */
const Header = ({ history, classes }) => {
  const [isAuthed, setIsAuthed] = React.useState(false);

  // useEffect(() => {
  //   const setAuth = (bool) => setIsAuthed(bool);

  //   const jwt = auth.isAuthenticated();
  //   setAuth(jwt ? true : false);

  //   history.listen(() => {
  //     const jwt = auth.isAuthenticated();
  //     setAuth(jwt ? true : false);
  //   });
  // }, [history]);

  return (
    <AppBar position="static">
      <Toolbar className={classes.root}>
        <Button component={Link} to="/">
          Title
        </Button>

        <div>
          <Button component={Link} to="/">
            Articles
          </Button>
          {routes
            .filter((route) => route.authed === isAuthed && route.displayOnNav)
            .map((route, i) => (
              <Button key={i} component={Link} to={route.link}>
                {route.name}
              </Button>
            ))}
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default withRouter(withStyles(styles)(Header));
