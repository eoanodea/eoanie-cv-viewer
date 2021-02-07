/*
 * File: Contact.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 26th January 2021 1:09:55 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 1:52:26 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import {
  Card,
  CardContent,
  createStyles,
  List,
  ListItem,
  ListItemText,
  Typography,
  withStyles,
  ListItemIcon,
  Link,
  Theme,
} from "@material-ui/core";
import React from "react";
import {
  GitHub,
  LinkedIn,
  Send,
  Link as LinkIcon,
  Cloud,
} from "@material-ui/icons";

const styles = ({ palette }: Theme) =>
  createStyles({
    root: {
      // height: "500px",
      display: "flex",
      // textAlign: "center",
      // alignItems: "center",
      flexDirection: "column",
      justifyContent: "space-evenly",
    },
    listLinks: {
      color: palette.primary.main,
    },
  });

type IProps = {
  classes: {
    root: any;
    listLinks: string;
  };
};

const Contact = ({ classes }: IProps) => {
  const items = [
    {
      name: "Github",
      secondary: "@eoanodea",
      link: "https://github.com/eoanodea",
      icon: <GitHub />,
    },
    {
      name: "Linkedin",
      secondary: "@eoanodea",
      link: "https://www.linkedin.com/in/eoanodea/",
      icon: <LinkedIn />,
    },
    {
      name: "My Portfolio",
      secondary: "It's unfinished dont judge me",
      link: "https://about.eoan.ie",
      icon: <LinkIcon />,
    },
    {
      name: "Get in touch",
      secondary: "Send me an email",
      link: "https://about.eoan.ie#contact",
      icon: <Send />,
    },
    {
      name: "WebSpace",
      secondary: "Hire me as a developer",
      link: "https://web-space.design",
      icon: <Cloud />,
    },
  ];
  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography variant="h1">Contact me</Typography>
        <br />
        <List>
          {items.map((item, i) => (
            <ListItem
              className={classes.listLinks}
              button
              key={i}
              component={Link}
              href={item.link}
              target="_blank"
            >
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.name} secondary={item.secondary} />
            </ListItem>
          ))}
        </List>
      </CardContent>
    </Card>
  );
};

export default withStyles(styles)(Contact);
