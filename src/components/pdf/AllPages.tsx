/*
 * File: AllPages.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 2nd February 2021 2:15:20 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 1:09:00 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import {
  createStyles,
  // Fade,
  // Grid,
  // List,
  // ListItem,
  // ListItemText,
  Theme,
  // Typography,
  withStyles,
} from "@material-ui/core";
import React from "react";
import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import EmptyState from "../global/EmptyState";
import Loading from "../global/Loading";

const styles = ({ palette, spacing }: Theme) =>
  createStyles({
    root: {
      // color: red,
    },
  });

interface IProps {
  pdf: string;
  width: number;
  classes: {
    root: any;
  };
}

const AllPages = ({ pdf, width, classes }: IProps) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  // const data = {
  //   name: "Eoan O'Dea",
  //   role: "Full-Stack Developer",
  //   links: [
  //     {
  //       name: "Location",
  //       value: "Dublin, Ireland",
  //     },
  //     {
  //       name: "Phone",
  //       value: "+353 86 346 2814",
  //     },
  //     {
  //       name: "Email",
  //       value: "hello@eoan.ie",
  //     },
  //     {
  //       name: "Github",
  //       value: "Eoan O'Dea - Github",
  //       link: "https://github.com/eoanodea",
  //     },
  //     {
  //       name: "Linkedin",
  //       value: "Eoan O'Dea - Linkedin",
  //       link: "https://www.linkedin.com/eoanodea",
  //     },
  //   ],
  //   introduction:
  //     "An enthusiastic, open-minded and entrepreneurial individual who has a positive attitude to life and who is willing to work hard. Friendly, trustworthy and works well with people",
  //   experience: [
  //     {
  //       company: "Blackrock Further Education Institute",
  //       role: "Tutor",
  //       from: "NOV 2020",
  //       to: "PRESENT",
  //       location: "Remote",
  //       description:
  //         "Providing one-on-one tutoring sessions for students who require additional support in their studies. Primarily tutoring Web Design, Web Development and Mathematics.",
  //     },
  //     {
  //       company: "The Locker Room",
  //       role: "CTO & Co-Founder",
  //       from: "MAY 2019",
  //       to: "PRESENT",
  //       location: "Remote",
  //       description:
  //         "Building a full digital eco-system for the company, including a front WordPress website, a full-stack MERN Web Application which integrated with Stripe's API. Web Hosting setup, Email setup, continuous monitoring, bug fixing and improvements.<br />Hiring developers and designers to aid me with designing and developing The Locker Room's brand.<br />Translating requests from the CEO into new features for the application. Providing technical support for customers.",
  //     },
  //   ],
  // };

  return (
    // // <Fade in={numPages !== null} timeout={5000}>
    // <React.Fragment>
    //   <div className={classes.root}>
    //     <Grid container>
    //       <Grid item sm={5}>
    //         <Typography variant="h1" color="secondary">
    //           {data.name}
    //         </Typography>
    //         <Typography variant="h2" color="primary">
    //           {data.role}
    //         </Typography>
    //       </Grid>

    //       <Grid item sm={7}>
    //         <List>
    //           {data.links.map((item, index) => (
    //             <ListItem key={index}>
    //               <ListItemText primary={item.value} secondary={item.name} />
    //             </ListItem>
    //           ))}
    //         </List>

    //         <hr />

    //         <Typography variant="body1">{data.introduction}</Typography>

    //         <hr />

    //         {data.experience.map((item, index) => (
    //           <div>
    //             <Typography variant="h3">
    //               <span style={{ fontWeight: "bold" }}>{item.company} </span> /{" "}
    //               {item.role}
    //             </Typography>
    //             <Typography variant="caption">
    //               {item.from} - {item.to} - {item.location}
    //             </Typography>
    //             {/* <br />
    //             <br /> */}
    //             <Typography style={{ margin: 8 }} variant="body1">
    //               {item.description}
    //             </Typography>
    //           </div>
    //         ))}
    //       </Grid>
    //     </Grid>
    //   </div>
    <Document
      file={pdf}
      // renderMode="svg"
      externalLinkTarget="_blank"
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<Loading />}
      error={<EmptyState message="Could not load document" />}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page
          width={width}
          key={`page_${index + 1}`}
          pageNumber={index + 1}
          customTextRenderer={({ str }) => <p>`${str}`</p>}
        />
      ))}
    </Document>
    // </React.Fragment>
  );
};

export default withStyles(styles)(AllPages);
