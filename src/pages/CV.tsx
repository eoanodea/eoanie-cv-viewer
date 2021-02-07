/*
 * File: Home.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 26th January 2021 1:09:55 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 12:52:51 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import React, { useEffect } from "react";
import AllPages from "../components/pdf/AllPages";

type CVURLType = {
  [key: string]: any;
  english: string;
  german: string;
};

interface IProps {
  lang: string;
}

const CV = ({ lang }: IProps) => {
  // const [isEnglish, setIsEnglish] = React.useState(true);
  const CVURLs: CVURLType = {
    english: process.env.REACT_APP_CV_ENG_URL as string,
    german: process.env.REACT_APP_CV_GRM_URL as string,
  };

  // useEffect(() => {
  //   console.log("props!, ", process.env.REACT_APP_CV_ENG_URL);
  // }, [lang]);

  return <AllPages pdf={CVURLs[lang]} />;
};

export default CV;
