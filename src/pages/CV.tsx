/*
 * File: Home.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 26th January 2021 1:09:55 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Sunday, 7th February 2021 2:13:47 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import React, { useLayoutEffect, useRef, useState } from "react";
import AllPages from "../components/pdf/AllPages";
import { config } from "../config/config";
import { useParams } from "react-router-dom";

const CV = () => {
  const pageRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  const { lang } = useParams();

  useLayoutEffect(() => {
    if (pageRef && pageRef.current) {
      setWidth(pageRef.current.offsetWidth);
    }
  }, [pageRef]);

  return (
    <div ref={pageRef}>
      <AllPages width={width} pdf={config[lang ? lang : "english"]} />
    </div>
  );
};

export default CV;
