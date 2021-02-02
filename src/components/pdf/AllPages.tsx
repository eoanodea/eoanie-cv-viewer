/*
 * File: AllPages.tsx
 * Project: cv-viewer
 * Version 0.1.0
 * File Created: Tuesday, 2nd February 2021 2:15:20 pm
 * Author: Eoan O'Dea (eoan@web-space.design)
 * -----
 * File Description:
 * Last Modified: Tuesday, 2nd February 2021 3:05:35 pm
 * Modified By: Eoan O'Dea (eoan@web-space.design>)
 * -----
 * Copyright 2021 WebSpace, WebSpace
 */

import React, { useState } from "react";
import { Document, Page } from "react-pdf";
import EmptyState from "../global/EmptyState";
import Loading from "../global/Loading";

const AllPages = (props: any) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    console.log("yes");
    setNumPages(numPages);
  }

  console.log(window.location.origin + "/pdf.worker.js");
  const { pdf } = props;

  return (
    <Document
      file={pdf}
      options={{ workerSrc: window.location.origin + "/pdf.worker.js" }}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<Loading />}
      error={<EmptyState message="Could not load document" />}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};

export default AllPages;
