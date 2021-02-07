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

import { useState } from "react";
import { Document, Page } from "react-pdf/dist/esm/entry.webpack";
import EmptyState from "../global/EmptyState";
import Loading from "../global/Loading";

interface IProps {
  pdf: string;
  width: number;
}

const AllPages = ({ pdf, width }: IProps) => {
  const [numPages, setNumPages] = useState(null);

  function onDocumentLoadSuccess({ numPages }: any) {
    setNumPages(numPages);
  }

  return (
    <Document
      file={pdf}
      onLoadSuccess={onDocumentLoadSuccess}
      loading={<Loading />}
      error={<EmptyState message="Could not load document" />}
    >
      {Array.from(new Array(numPages), (el, index) => (
        <Page width={width} key={`page_${index + 1}`} pageNumber={index + 1} />
      ))}
    </Document>
  );
};

export default AllPages;
